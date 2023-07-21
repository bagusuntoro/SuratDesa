<template>
    <div id="wrapper">
    <sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
         <h1 class="text-center h3">Note Page</h1>
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="row mt-5">
              <div class="col-sm-3">
                <router-link class="btn btn-primary me-2" to="user-input-note">
                  <i class="bi bi-plus"></i>
                </router-link>
              </div>
              <div class="col-sm-9"></div>
            </div>
            <table class="table table-striped mt-2">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Location</th>
                  <th scope="col">Date</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in note" :key="item.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.location }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.destination }}</td>
                  <td>
                    <button type="button" @click="detail(item.id)" class="btn btn-warning" style="float:right;">
                      <i class="bi bi-ticket-detailed"></i>
                    </button>
                    <!-- <router-link
                      :to="{
                        name: 'user-detail-note',
                        params: { id: item.id },
                      }"
                      class="btn btn-warning me-2"
                    >
                    </router-link> -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm-1"></div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->
</template>