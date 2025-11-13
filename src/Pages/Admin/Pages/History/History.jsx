"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Empty, Badge } from "antd";
import {
  Container,
  Header,
  DateText,
  StatsGrid,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
  FiltersContainer,
  SearchBox,
  SearchInput,
  FilterSelect,
} from "./HistoryStyles";
import { IoMdCheckmarkCircleOutline, IoMdTime } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

const QueueHistory = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [branchFilter, setBranchFilter] = useState("All Branches");
  const [stats, setStats] = useState({
    completedToday: 0,
    avgWaitTime: 0,
    cancelledNoShow: 0,
  });

  const branchId = localStorage.getItem("user_ID");
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchQueueHistory = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/v1/history/${branchId}`
        );
        console.log(response);

        if (response.data && response.data.data) {
          setData(response.data.data);
          setFilteredData(response.data.data);
          calculateStats(response.data.data);
        }
      } catch (err) {
        setError("Failed to fetch queue history. Please try again.");
        console.error("Error fetching queue history:", err);
      } finally {
        setLoading(false);
      }
    };

    if (branchId) {
      fetchQueueHistory();
    }
  }, [branchId]);

  const calculateStats = (queueData) => {
    const completed = queueData.filter(
      (item) => item.status === "completed"
    ).length;

    const waitTimes = queueData
      .map((item) => Number.parseInt(item.waitTime) || 0)
      .filter((time) => time > 0);
    const avgWait =
      waitTimes.length > 0
        ? Math.round(waitTimes.reduce((a, b) => a + b, 0) / waitTimes.length)
        : 0;

    const cancelled = queueData.filter(
      (item) => item.status === "cancelled" || item.status === "no-show"
    ).length;

    setStats({
      completedToday: completed,
      avgWaitTime: avgWait,
      cancelledNoShow: cancelled,
    });
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    filterData(value, statusFilter, branchFilter);
  };

  const handleStatusFilter = (value) => {
    setStatusFilter(value);
    filterData(searchTerm, value, branchFilter);
  };

  const handleBranchFilter = (value) => {
    setBranchFilter(value);
    filterData(searchTerm, statusFilter, value);
  };

  const filterData = (search, status, branch) => {
    let result = data;

    if (search) {
      result = result.filter(
        (item) =>
          item.customerName.toLowerCase().includes(search.toLowerCase()) ||
          item.queueNumber.toLowerCase().includes(search.toLowerCase()) ||
          item.serviceType.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status !== "All Status") {
      result = result.filter((item) => item.status === status.toLowerCase());
    }

    if (branch !== "All Branches") {
      result = result.filter((item) => item.branch === branch);
    }

    setFilteredData(result);
  };

  const getStatusColor = (status) => {
    const statusMap = {
      completed: "success",
      cancelled: "error",
      "no-show": "warning",
      pending: "processing",
    };
    return statusMap[status?.toLowerCase()] || "default";
  };

  const formatTime = (time) => {
    if (!time || time === "-") return "-";
    return time.includes("min") ? time : `${time} min`;
  };

  const columns = [
    {
      title: "Queue ID",
      dataIndex: "queueNumber",
      key: "queueNumber",
      width: 100,
    },
    {
      title: "Customer",
      dataIndex: "customerName",
      key: "customerName",
      width: 150,
    },
    {
      title: "Service",
      dataIndex: "serviceType",
      key: "serviceType",
      width: 150,
    },
    {
      title: "Date & Time",
      key: "dateTime",
      width: 140,
      render: (_, record) => `${record.joinedDate} ${record.joinedTime}`,
    },
    {
      title: "Wait Time",
      dataIndex: "waitTime",
      key: "waitTime",
      width: 100,
      render: formatTime,
    },
    {
      title: "Service Time",
      dataIndex: "serviceTime",
      key: "serviceTime",
      width: 120,
      render: formatTime,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (status) => (
        <Badge
          status={getStatusColor(status)}
          text={status.charAt(0).toUpperCase() + status.slice(1)}
        />
      ),
    },
  ];

  return (
    <Container>
      <Header>
        <div>
          <h1>Queue History</h1>
          <DateText>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </DateText>
        </div>
      </Header>

      <StatsGrid>
        <StatCard>
          <StatIcon style={{ backgroundColor: "#dcfce7", color: "#00a63e" }}>
            <IoMdCheckmarkCircleOutline />
          </StatIcon>
          <StatValue>{stats.completedToday}</StatValue>
          <StatLabel>Completed Today</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon style={{ backgroundColor: "#DBEAFE", color: "#155DFC" }}>
            <IoMdTime />
          </StatIcon>
          <StatValue>{stats.avgWaitTime} min</StatValue>
          <StatLabel>Avg Wait Time</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon style={{ backgroundColor: "#fFE2E2", color: "#E7000B" }}>
            <MdOutlineCancel />
          </StatIcon>
          <StatValue>{stats.cancelledNoShow}</StatValue>
          <StatLabel>Cancelled/No-Show</StatLabel>
        </StatCard>
      </StatsGrid>

      <FiltersContainer>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="Search by name, Queue ID, or queue number..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </SearchBox>
        <FilterSelect
          value={statusFilter}
          onChange={(e) => handleStatusFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Completed</option>
          <option>Cancelled</option>
          <option>No-Show</option>
          <option>Pending</option>
        </FilterSelect>
        <FilterSelect
          value={branchFilter}
          onChange={(e) => handleBranchFilter(e.target.value)}
        >
          <option>All Branches</option>
          <option>Branch 1</option>
          <option>Branch 2</option>
          <option>Branch 3</option>
        </FilterSelect>
      </FiltersContainer>

      {/* Antd Table */}
      {error ? (
        <div style={{ color: "#dc2626", padding: "2rem", textAlign: "center" }}>
          {error}
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={filteredData.map((item, index) => ({
            ...item,
            key: index,
          }))}
          loading={loading}
          pagination={{ pageSize: 10 }}
          locale={{
            emptyText: <Empty description="No queue records found." />,
          }}
          scroll={{ x: 1000 }}
          style={{
            background: "white",
            borderRadius: "8px",
          }}
        />
      )}
    </Container>
  );
};

export default QueueHistory;
