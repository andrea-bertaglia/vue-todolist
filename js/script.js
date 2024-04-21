const { createApp } = Vue;

createApp({
  data() {
    return {
      newItem: {
        text: "",
        label: "",
        done: false,
      },
      tasksPrev: [
        {
          text: "Quarterly Newsletter",
          label: "Editorial",
          done: true,
        },
      ],
      tasksToday: [
        {
          text: "Recruiting blog post",
          label: "Editorial",
          done: true,
        },
        {
          text: "Mobile app launch",
          label: "Q1-Goals",
          done: true,
        },
        {
          text: "Interview John H.",
          label: "Recruiting",
          done: false,
        },
        {
          text: "Summit update to mobile storefronts",
          label: "Mobile",
          done: true,
        },
      ],
      tasksNext: [
        {
          text: "Schedule meeting with Alex",
          label: "",
          done: false,
        },
        {
          text: "Homepage refresh",
          label: "Website",
          done: true,
        },
        {
          text: "Onboard new Sales team members",
          label: "Sales",
          done: false,
        },
        {
          text: "Review editorial calendar",
          label: "Editorial",
          done: true,
        },
      ],
    };
  },
  methods: {
    addItem: function () {
      console.log(this);
      this.tasksNext.push({
        ...this.newItem,
      });
      console.log(this.tasksNext);
    },
  },
}).mount("#app");
