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
  TableWrapper,
  LoadingText,
  ErrorText,
  NoDataText,
} from "./HistoryStyles";
import { IoMdCheckmarkCircleOutline, IoMdTime } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { BsDisplay } from "react-icons/bs";

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

        if (response.data?.data) {
          const formatted = response.data.data.map((item) => {
            const parts = item.joinedAt?.split(",") || [];
            const date = parts[0]?.trim() || "-";
            const time = parts[1]?.replace("UTC", "").trim() || "-";

            return {
              key: item.queueNumber,
              queueNumber: item.queueNumber || "-",
              customerName: item.fullName || "-",
              serviceType: item.service || "-",
              joinedDate: date,
              joinedTime: time,
              waitTime: item.waitTime || "-",
              serviceTime: item.serviceTime || "-",
              status: item.status || "-",
              branch: item.branch || "Main Branch",
            };
          });

          setData(formatted);
          setFilteredData(formatted);

          setStats({
            completedToday: response.data.completedToday || 0,
            avgWaitTime: response.data.metrics?.avgWaitTime || 0,
            cancelledNoShow: response.data.metrics?.cancelledNoShow || 0,
          });
        }
      } catch (err) {
        setError("Failed to fetch queue history. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (branchId) fetchQueueHistory();
  }, [branchId]);
  const searchData = (value) => {
    setSearchTerm(value);

    const lower = value.toLowerCase();

    const result = data.filter(
      (item) =>
        item.customerName.toLowerCase().includes(lower) ||
        item.queueNumber.toLowerCase().includes(lower) ||
        item.serviceType.toLowerCase().includes(lower) ||
        item.status.toLowerCase().includes(lower)
    );

    setFilteredData(result);
  };

  const handleStatusFilter = (value) => {
    setStatusFilter(value);
    applyFilters(searchTerm, value, branchFilter);
  };

  const handleBranchFilter = (value) => {
    setBranchFilter(value);
    applyFilters(searchTerm, statusFilter, value);
  };

  const applyFilters = (search, status, branch) => {
    let result = [...data];

    if (search) {
      const lower = search.toLowerCase();
      result = result.filter(
        (item) =>
          item.customerName.toLowerCase().includes(lower) ||
          item.queueNumber.toLowerCase().includes(lower) ||
          item.serviceType.toLowerCase().includes(lower)
      );
    }

    if (status !== "All Status") {
      result = result.filter(
        (item) => item.status.toLowerCase() === status.toLowerCase()
      );
    }

    if (branch !== "All Branches") {
      result = result.filter((item) => item.branch === branch);
    }

    setFilteredData(result);
  };
  const getStatusColor = (status) => {
    const map = {
      completed: "success",
      cancelled: "error",
      "no-show": "warning",
      pending: "processing",
    };
    return map[status?.toLowerCase()] || "default";
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
      width: 120,
    },
    {
      title: "Customer",
      dataIndex: "customerName",
      key: "customerName",
      width: 200,
    },
    {
      title: "Service",
      dataIndex: "serviceType",
      key: "serviceType",
      width: 130,
    },
    {
      title: "Date & Time,",
      key: "dateTime",
      width: 200,
      render: (_, rec) => `${rec.joinedDate} ${rec.joinedTime}`,
    },
    {
      title: "Wait Time",
      dataIndex: "waitTime",
      key: "waitTime",
      width: 120,
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
      width: 150,
      backgroundColor: "red",
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

      {/* Stats */}
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
          <StatIcon style={{ backgroundColor: "#FFE2E2", color: "#E7000B" }}>
            <MdOutlineCancel />
          </StatIcon>
          <StatValue>{stats.cancelledNoShow}</StatValue>
          <StatLabel>Cancelled / No-Show</StatLabel>
        </StatCard>
      </StatsGrid>

      <FiltersContainer>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="Search by name, queue ID, or service..."
            value={searchTerm}
            onChange={(e) => searchData(e.target.value)}
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
          <option>Main Branch</option>
        </FilterSelect>
      </FiltersContainer>

      <TableWrapper>
        {loading ? (
          <LoadingText>Loading queue history...</LoadingText>
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : filteredData.length === 0 ? (
          <NoDataText>No queue records found.</NoDataText>
        ) : (
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={true}
          />
        )}
      </TableWrapper>
    </Container>
  );
};

export default QueueHistory;
