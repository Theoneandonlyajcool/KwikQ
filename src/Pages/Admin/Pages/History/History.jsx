import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const QueueHistory = () => {
  const [apiParams, setApiParams] = useState({
    branchId: "64b1e2d9c3a4b9f12c8e7f21",
    startDate: "2025-10-01",
    endDate: "2025-10-31",
  });

  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedBranch, setSelectedBranch] = useState("All Branches");
  const [queueData, setQueueData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // base url from your env (matches your other files)
  const BaseUrl =
    import.meta.env.VITE_API_BASE_URL || "https://kwikq-1.onrender.com";

  // Try several common localStorage keys (keeps with your style & is safe)
  const getPossibleUserId = () => {
    const candidates = [
      import.meta.env.VITE_USERID,
      "User",
      "userId",
      "user-recog",
      "user_id",
      "USER_ID",
    ];
    for (const key of candidates) {
      if (!key) continue;
      const val = localStorage.getItem(key);
      if (val) return val;
    }
    return null;
  };

  const getPossibleToken = () => {
    const candidates = [
      "User",
      import.meta.env.VITE_USERTOKEN,
      "token",
      "authToken",
    ];
    for (const key of candidates) {
      if (!key) continue;
      const val = localStorage.getItem(key);
      if (val) return val;
    }
    return null;
  };

  const cleanId = (raw) => {
    if (!raw) return raw;
    try {
      const parsed = JSON.parse(raw);
      if (parsed) raw = parsed;
    } catch (e) {
      // leave as-is
    }
    return String(raw)
      .replace(/^["']+|["']+$/g, "")
      .trim();
  };

  useEffect(() => {
    const fetchQueueHistory = async () => {
      try {
        setLoading(true);
        setError(null);

        const rawUserId = getPossibleUserId();
        let userId = cleanId(rawUserId);

        // fallback to branchId if userId not available (like some of your other files)
        if (!userId || userId === "null" || userId === "undefined") {
          userId = apiParams.branchId;
        }

        if (!userId) {
          toast.error("User ID not found. Please login first.");
          setError("User ID not found");
          setLoading(false);
          return;
        }

        const token = getPossibleToken();

        const { branchId, startDate, endDate } = apiParams;

        const apiUrl = `${BaseUrl}/api/v1/history/${userId}?branchId=${branchId}&startDate=${startDate}&endDate=${endDate}`;

        console.log("[v0] Fetching queue history from:", apiUrl);

        const response = await axios.get(apiUrl, {
          headers: token
            ? {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              }
            : { "Content-Type": "application/json" },
        });

        console.log("[v0] API Response:", response.data);

        if (response.data && response.data.data) {
          localStorage.setItem(
            "queueHistoryData",
            JSON.stringify(response.data.data)
          );

          if (response.data.id) {
            localStorage.setItem("queueHistoryId", response.data.id);
          }

          setQueueData(response.data.data);
          toast.success("Queue history loaded successfully");
        } else {
          setQueueData([]);
        }

        setLoading(false);
      } catch (err) {
        console.error("[v0] Error fetching queue history:", err);
        toast.error(
          err?.response?.data?.message || "Failed to fetch queue history"
        );
        setError(
          err?.response?.data?.message ||
            err?.message ||
            "Error fetching queue history"
        );
        setLoading(false);
      }
    };

    fetchQueueHistory();
    // we intentionally re-fetch when apiParams change (your original intent)
  }, [apiParams]);

  // memoize computed stats to avoid re-calculation on unrelated renders
  const stats = useMemo(() => {
    const completed = queueData.filter(
      (item) => item.status?.toLowerCase() === "completed"
    ).length;
    const cancelled = queueData.filter((item) => {
      const st = item.status?.toLowerCase();
      return st === "cancelled" || st === "no show";
    }).length;

    const avgWaitTime =
      queueData.length > 0
        ? Math.round(
            queueData.reduce((sum, item) => {
              const minutes = Number.parseInt(item.waitTime) || 0;
              return sum + minutes;
            }, 0) / queueData.length
          )
        : 0;

    return { completed, cancelled, avgWaitTime };
  }, [queueData]);

  const getStatusClass = (status) => {
    if (!status) return "";
    switch (status.toLowerCase()) {
      case "completed":
        return "status-completed";
      case "cancelled":
        return "status-cancelled";
      case "no show":
        return "status-noshow";
      default:
        return "";
    }
  };

  // Client-side filtered data based on selectedStatus & selectedBranch
  const filteredQueueData = useMemo(() => {
    return queueData.filter((item) => {
      const statusMatch =
        selectedStatus === "All Status"
          ? true
          : item.status?.toLowerCase() === selectedStatus.toLowerCase();
      const branchMatch =
        selectedBranch === "All Branches"
          ? true
          : (item.branch || "").toLowerCase() === selectedBranch.toLowerCase();
      return statusMatch && branchMatch;
    });
  }, [queueData, selectedStatus, selectedBranch]);

  const handleParamChange = (e) => {
    const { name, value } = e.target;
    console.log("[v0] Param changed:", name, value);
    setApiParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // keeps behavior same as your original "Apply Filters" button (API is triggered by apiParams change)
  const handleApplyFilters = () => {
    console.log("[v0] Applying filters with:", apiParams);
    // no-op since useEffect listens to apiParams — we keep this to match your UX pattern
  };

  return (
    <div className="queue-history-container">
      <div className="header">
        <h1>Queue History</h1>
        <p className="date">{new Date().toLocaleDateString()}</p>
      </div>

      {error && <div className="error-message">Error: {error}</div>}

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="filters">
            <div
              style={{
                display: "flex",
                gap: "15px",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label
                  htmlFor="branchId"
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#5a6c7d",
                  }}
                >
                  Branch ID
                </label>
                <input
                  type="text"
                  id="branchId"
                  name="branchId"
                  value={apiParams.branchId}
                  onChange={handleParamChange}
                  className="filter-select"
                  style={{ width: "200px" }}
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label
                  htmlFor="startDate"
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#5a6c7d",
                  }}
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={apiParams.startDate}
                  onChange={handleParamChange}
                  className="filter-select"
                  style={{ width: "150px" }}
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label
                  htmlFor="endDate"
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#5a6c7d",
                  }}
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={apiParams.endDate}
                  onChange={handleParamChange}
                  className="filter-select"
                  style={{ width: "150px" }}
                />
              </div>

              <button
                onClick={handleApplyFilters}
                style={{
                  alignSelf: "flex-end",
                  padding: "10px 20px",
                  background: "#2196f3",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Apply Filters
              </button>
            </div>

            <select
              className="filter-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option>All Status</option>
              <option>Completed</option>
              <option>Cancelled</option>
              <option>No Show</option>
            </select>

            <select
              className="filter-select"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option>All Branches</option>
              {[
                ...new Set(queueData.map((item) => item.branch || "Unknown")),
              ].map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="stat-value">{stats.completed}</div>
              <div className="stat-label">Completed Tickets</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6v6l4 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="stat-value">{stats.avgWaitTime} min</div>
              <div className="stat-label">Avg Wait Time</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon red">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 9l-6 6M9 9l6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="stat-value">{stats.cancelled}</div>
              <div className="stat-label">Cancelled/No Show</div>
            </div>
          </div>

          {filteredQueueData.length > 0 ? (
            <div className="table-container">
              <table className="queue-table">
                <thead>
                  <tr>
                    <th>Queue ID</th>
                    <th>Customer</th>
                    <th>Service</th>
                    <th>Branch</th>
                    <th>Date & Time</th>
                    <th>Wait Time</th>
                    <th>Service Time</th>
                    <th>Status</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQueueData.map((item, index) => {
                    const key = item.id || item._id || index;
                    return (
                      <tr key={key}>
                        <td className="queue-id">
                          {item.id || item._id || "N/A"}
                        </td>
                        <td>
                          <div className="customer-info">
                            <div className="customer-name">
                              {item.customer?.name || "N/A"}
                            </div>
                            <div className="customer-phone">
                              {item.customer?.phone || "N/A"}
                            </div>
                          </div>
                        </td>
                        <td>{item.service || "N/A"}</td>
                        <td>{item.branch || "N/A"}</td>
                        <td>
                          <div className="datetime-info">
                            <div className="date-created">
                              {item.dateTime?.created || "N/A"}
                            </div>
                            <div className="time-arrival">
                              {item.dateTime?.arrival || "N/A"}
                            </div>
                          </div>
                        </td>
                        <td>{item.waitTime || "N/A"}</td>
                        <td>{item.serviceTime || "N/A"}</td>
                        <td>
                          {item.status && (
                            <span
                              className={`status-badge ${getStatusClass(
                                item.status
                              )}`}
                            >
                              {item.status}
                            </span>
                          )}
                        </td>
                        <td>{item.rating || "---"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div
              className="table-container"
              style={{ padding: "40px", textAlign: "center" }}
            >
              <p>No queue history data found for the selected period.</p>
            </div>
          )}
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default QueueHistory;
