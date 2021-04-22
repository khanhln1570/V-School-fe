<template>
  <v-row no-gutters>
    <v-col cols="12" md="2"></v-col>
    <v-col cols="12" md="8">
      <download-excel :data="items"> Download Data </download-excel>
      <client-only>
        <UserTable :headers="headers" :items="items" itemKey="name" />
      </client-only>
    </v-col>
    <v-col cols="12" md="2"></v-col>
  </v-row>
</template>

<script>
import testValidation from "@/validations/test/test.validate";

export default {
  data() {
    return {
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
