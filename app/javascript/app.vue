<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card elevation="3" max-width="344">
          <v-card-title>Upload your image</v-card-title>
          <v-card-subtitle>File should be Jpeg, Png...</v-card-subtitle>
          <v-row dense>
            <v-col cols="12">
              upload-zone
            </v-col>
          </v-row>
          <v-card-actions>
            <v-btn color="primary">
              Choose a file
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Hello Vue!",
    };
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
