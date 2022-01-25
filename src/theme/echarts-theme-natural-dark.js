export default {
  color: [
    '#45DAD1',
    '#FFA940',
    '#73D13D',
    '#40A9FF',
    '#9F69E2',
    '#45DAD1',
    '#8BA2FF',
    '#C8A786',
    '#BAE637',
  ],
  graph: {
    color: [
      '#45DAD1',
      '#FFA940',
      '#73D13D',
      '#40A9FF',
      '#9F69E2',
      '#45DAD1',
      '#8BA2FF',
      '#C8A786',
      '#BAE637',
    ],
  },
  visualMap: {
    color: ['#45DAD1'],
    inRange: {
      colorLightness: [0.9, 0.15],
      color: ['#45DAD1'],
    },
  },
  geo: {
    label: {
      normal: {
        textStyle: {
          color: '#ffffff',
        },
      },
      emphasis: {
        textStyle: {
          color: '#ffffff',
        },
      },
    },
    itemStyle: {
      normal: {
        borderColor: '#fff',
      },
      emphasis: {
        areaColor: '#ffc53d',
      },
    },
  },
  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, '#40A9FF'],
          [0.5, '#26C9C3'],
          [0.8, '#FFC53D'],
          [1, '#F57582'],
        ],
      },
    },
    title: {
      offsetCenter: [0, '20%'],
      color: 'rgba(255, 255, 255, 0.4)',
      fontWeight: 'bold',
    },
    detail: {
      offsetCenter: [0, '40%'],
    },
  },
  backgroundColor: '#333',
  title: {
    textStyle: {
      color: 'rgba(33,33,33,1)',
      fontSize: 14,
    },
    subtextStyle: {
      color: '#6E7079',
    },
  },
  legend: {
    textStyle: {
      color: 'rgba(255, 255, 255, 0.65)',
    },
  },
  tooltip: {
    trigger: 'axis',
    confine: true,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    textStyle: {
      align: 'left',
      fontSize: 14,
      lineHeight: 18,
      color: '#ffffff',
    },
    padding: 8,
  },
  bar: {
    tooltip: {},
  },
  line: {
    itemStyle: {
      borderWidth: 2,
    },
    tooltip: {},
  },
  pie: {
    itemStyle: {
      borderColor: '#fff',
      borderWidth: 1,
    },
  },
  radar: {
    areaStyle: {
      opacity: 0.3,
    },
    lineStyle: {
      width: 2,
    },
  },
  scatter: {
    itemStyle: {
      opacity: 0.7,
    },
  },
  funnel: {
    color: [
      '#45DAD1',
      '#FFA940',
      '#73D13D',
      '#40A9FF',
      '#9F69E2',
      '#45DAD1',
      '#8BA2FF',
      '#C8A786',
      '#BAE637',
    ],
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.65)',
      },
    },
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        color: '#D9D9D9',
      },
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.4)',
      },
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#D9D9D9',
      },
    },
    splitArea: {
      areaStyle: {
        color: 'rgba(255, 255, 255, 0.65)',
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        color: '#D9D9D9',
      },
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.4)',
      },
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: 'rgba(255, 255, 255, 0.16)',
      },
    },
    splitArea: {
      areaStyle: {
        color: 'rgba(255, 255, 255, 0.65)',
      },
    },
  },
};
