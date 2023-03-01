// 流程监控的数据
export const processMonitoringData = [
  {
    name: "正常",
    data: [0.4, 0.5, 0.3, 0.6, 0.8, 0.5, 0.4, 0.5, 0.7, 0.8, 0.5, 0.4],
  },
  {
    name: "异常",
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
];

// 实时定位
export const chargingStatisticsData = [
  {
    name: "1",
    value: 0,
  },
  {
    name: "2",
    value: 0,
  },
  {
    name: "3",
    value: 0,
  },
  {
    name: "4",
    value: 0,
  },
  {
    name: "5",
    value: 0,
  },
  {
    name: "6",
    value: 0,
  },
  {
    name: "7",
    value: 0,
  },
];

// 异常监控
export const exceptionMonitoringData = [
  {
    id: 1,
    name: "异常1",
    value: 5,
    dur: "10s",
    begin: "0s",
  },
  {
    id: 2,
    name: "异常2",
    value: 3,
    dur: "10s",
    begin: "-3s",
  },
  {
    id: 3,
    name: "异常3",
    value: 5,
    dur: "10s",
    begin: "-5s",
  },
];

// 数据分析
export const dataAnalysisData = [
  {
    id: 1,
    title: "报警事件",
    totalNum: 375,
    unit: "个",
    percentage: 1.2,
    isUp: true,
  },
  {
    id: 2,
    title: "异常总数",
    totalNum: 65,
    unit: "个",
    percentage: 1.4,
    isUp: true,
  },
  {
    id: 3,
    title: "识别事件",
    totalNum: 3560,
    unit: "个",
    percentage: 2.3,
    isUp: false,
  },
];
