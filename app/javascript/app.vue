<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col>
          <v-card elevation="3" max-width="344">
            <v-card-title class="justify-center">
              Upload your image
            </v-card-title>
            <v-card-subtitle class="justify-center">
              File should be Jpeg, Png...
            </v-card-subtitle>
            upload-zone
            <v-card-actions class="justify-center">
              <v-btn color="primary">
                Choose a file
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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
