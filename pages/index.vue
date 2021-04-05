<template>
  <v-row no-gutters>
    <v-col cols="12" md="2"></v-col>
    <v-col cols="12" md="8">
      <CommonMainChart
        chartType="Line"
        :chartData="chartData"
        :options="options"
      />
      <br />
      <CommonMainChart
        chartType="Radar"
        :chartData="chartData"
        :options="options"
      />
      <br />
      <CommonMainChart
        chartType="Bar"
        :chartData="chartData"
        :options="options"
      />
      <br />
    </v-col>
    <v-col cols="12" md="2"></v-col>
  </v-row>
</template>

<script>
import testValidation from "@/validations/test/test.validate";

export default {
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(248,121,121,0.4)',
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            pointHoverBorderColor: '#f87979',
            pointHoverBackgroundColor: '#fff',
            pointHoverRadius: 4,
            pointHitRadius: 10,
            pointHoverBorderWidth: 1,
            borderWidth: 1,
            borderColor: '#f87979',
            data: [40, 62, 34, 20]
          },
          {
            label: 'Data Two',
            backgroundColor: 'rgba(1,197,142,0.4)',
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            pointHoverBorderColor: '#00c58e',
            pointHoverBackgroundColor: '#fff',
            pointHoverRadius: 4,
            pointHitRadius: 10,
            pointHoverBorderWidth: 1,
            borderWidth: 1,
            borderColor: '#00c58e',
            data: [25, 54, 48, 62]
          },
          {
            label: 'Data Three',
            backgroundColor: 'rgba(57,169,220,0.4)',
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            pointHoverBorderColor: '#39A9DC',
            pointHoverBackgroundColor: '#fff',
            pointHoverRadius: 4,
            pointHitRadius: 10,
            pointHoverBorderWidth: 1,
            borderWidth: 1,
            borderColor: '#39A9DC',
            data: [55, 44, 52, 42]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
        },
      },
      ///////////////////////////////////////
      headers: [
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
        { text: "Actions", value: "actions" },
      ],
      items: [
        {
          name: "Frozen Yogurt",
          email: "Frozen Yogurt@agmail.som",
          role: "Member",
        },
        {
          name: "Yogurt",
          email: "Yogurt@agmail.som",
          role: "Member",
        },
        {
          name: "aa",
          email: "aa@agmail.som",
          role: "Admin",
        },
        {
          name: "bb",
          email: "bb@agmail.som",
          role: "Member",
        },
        {
          name: "ba",
          email: "bb@agmail.som",
          role: "Member",
        },
        {
          name: "baba",
          email: "bb@agmail.som",
          role: "Member",
        },
        {
          name: "bbd",
          email: "bb@agmail.som",
          role: "Member",
        },
        {
          name: "bbw",
          email: "bb@agmail.som",
          role: "Member",
        },
      ],
    };
  },
  validations: {
    form: testValidation,
  },
};
</script>
