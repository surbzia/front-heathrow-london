<template>
  <div class="container m-5 p-2">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-primary m-3">Journey Details</h2>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6">
            <span>WHERE FROM?</span>
            <v-select
              label="address"
              v-model="form.single_journey.address_from"
              :options="address_data"
              form="booking-form"
            ></v-select>
            <p
              class="text-danger"
              v-if="errors.single_journey.address_from != null"
            >
              {{ errors.single_journey.address_from }}
            </p>
          </div>
          <div class="col-md-6">
            <span>WHERE TO?</span>
            <v-select
              label="address"
              v-model="form.single_journey.address_to"
              :options="address_data"
              form="booking-form"
            ></v-select>
            <p
              class="text-danger"
              v-if="errors.single_journey.address_to != null"
            >
              {{ errors.single_journey.address_to }}
            </p>
          </div>
          <div class="col-md-6">
            <span>TRAVELING DATE</span>
            <input
              type="date"
              v-model="form.single_journey.date"
              class="form-control"
              form="booking-form"
            />
            <p class="text-danger" v-if="errors.single_journey.date != null">
              {{ errors.single_journey.date }}
            </p>
          </div>
          <div class="col-md-6">
            <span>TRAVELING TIME</span>
            <input
              type="time"
              v-model="form.single_journey.time"
              class="form-control"
              form="booking-form"
            />
            <p class="text-danger" v-if="errors.single_journey.time != null">
              {{ errors.single_journey.time }}
            </p>
          </div>
        </div>
        <div class="row" v-if="form.has_return">
          <h4 class="text-primary m-3">Return Journey</h4>

          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6">
                <span>WHERE FROM?</span>
                <v-select
                  label="address"
                  v-model="form.return_journey.address_from"
                  :options="address_data"
                  form="booking-form"
                ></v-select>
                <p
                  class="text-danger"
                  v-if="errors.return_journey.address_from != null"
                >
                  {{ errors.return_journey.address_from }}
                </p>
              </div>
              <div class="col-md-6">
                <span>WHERE TO?</span>
                <v-select
                  label="address"
                  v-model="form.return_journey.address_to"
                  :options="address_data"
                  form="booking-form"
                ></v-select>
                <p
                  class="text-danger"
                  v-if="errors.return_journey.address_to != null"
                >
                  {{ errors.return_journey.address_to }}
                </p>
              </div>
              <div class="col-md-6">
                <span>TRAVELING DATE</span>
                <input
                  type="date"
                  v-model="form.return_journey.date"
                  class="form-control"
                  form="booking-form"
                />
                <p
                  class="text-danger"
                  v-if="errors.return_journey.date != null"
                >
                  {{ errors.return_journey.date }}
                </p>
              </div>
              <div class="col-md-6">
                <span>TRAVELING TIME</span>
                <input
                  type="time"
                  v-model="form.return_journey.time"
                  class="form-control"
                  form="booking-form"
                />
                <p
                  class="text-danger"
                  v-if="errors.return_journey.time != null"
                >
                  {{ errors.return_journey.time }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-12">
            <div class="form-check">
              <input
                class="form-check-input"
                @change="updateReturnJourney"
                v-model="form.has_return"
                type="checkbox"
                value=""
                id="return_journey"
                form="booking-form"
              />
              <label class="form-check-label" for="return_journey">
                Return journey?
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 mt-5">
      <button
        class="btn btn-primary col-md-4"
        form="booking-form"
        @click="addBooking"
      >
        Calculate Fare
      </button>
    </div>
  </div>
</template>
<script>
import InnerBanner from "~/components/InnerBanner.vue";
import swal from "sweetalert";
export default {
  name: "Booking",
  data() {
    return {
      vehicles: [],
      address_data: [],
      errors: {
        count: 0,
        single_journey: {
          address_to: null,
          address_from: null,
          date: null,
          time: null,
        },
        return_journey: {
          address_to: null,
          address_from: null,
          date: null,
          time: null,
        },
      },
      form: {
        has_return: false,
        single_journey: {
          address_to: null,
          address_from: null,
          date: null,
          time: null,
        },
        return_journey: {
          address_to: null,
          address_from: null,
          date: null,
          time: null,
        },
      },
    };
  },
  methods: {
    addBooking: async function () {
      this.clearErrors();
      if (this.validate()) {
        this.$store.dispatch("booking/SetJourneyDetails", {
          details: this.form,
        });
        this.submitJourneyDetails(this.form);
        this.$emit("SaveJourney", {
          journey: false,
          cars: true,
          passengers: false,
        });
      }
    },
    async submitJourneyDetails(details) {
      let res = await this.$axios
        .$post("booking/journey-details", {
          details: details,
        })
        .catch((e) => {
          return { errors: true, data: e.response.data.errors };
        });
      if (res.errors) {
        swal({
          title: res.data.email[0],
          timer: 1100,
          icon: "error",
        });
      } else {
        if (res.status) {
          swal({
            title: res.message,
            timer: 1100,
            icon: "success",
          });
        } else {
          swal({
            title: res.message,
            timer: 1100,
            icon: "error",
          });
        }
      }
    },
    clearErrors() {
      this.errors.count = 0;
      this.errors.single_journey.address_from = null;
      this.errors.single_journey.address_to = null;
      this.errors.single_journey.date = null;
      this.errors.single_journey.time = null;
      this.errors.return_journey.address_from = null;
      this.errors.return_journey.address_to = null;
      this.errors.return_journey.date = null;
      this.errors.return_journey.time = null;
    },
    validate() {
      if (this.form.single_journey.address_from == null) {
        this.errors.single_journey.address_from = "Address from is required.";
        this.errors.count++;
      }
      if (this.form.single_journey.address_to == null) {
        this.errors.single_journey.address_to = "Address to is required.";
        this.errors.count++;
      }
      if (this.form.single_journey.date == null) {
        this.errors.single_journey.date = "Date is required.";
        this.errors.count++;
      }
      if (this.form.single_journey.time == null) {
        this.errors.single_journey.time = "Time is required.";
        this.errors.count++;
      }
      if (this.form.has_return != false) {
        if (this.form.return_journey.address_from == null) {
          this.errors.return_journey.address_from = "Address from is required.";
          this.errors.count++;
        }
        if (this.form.return_journey.address_to == null) {
          this.errors.return_journey.address_to = "Address to is required.";
          this.errors.count++;
        }
        if (this.form.return_journey.date == null) {
          this.errors.return_journey.date = "Date is required.";
          this.errors.count++;
        }
        if (this.form.return_journey.time == null) {
          this.errors.return_journey.time = "Time is required.";
          this.errors.count++;
        }
      }
      if (this.errors.count > 0) {
        return false;
      }
      return true;
    },
    updateReturnJourney() {
      if (this.form.has_return) {
        this.form.return_journey.address_from =
          this.form.single_journey.address_to;
        this.form.return_journey.address_to =
          this.form.single_journey.address_from;
      }
    },
    async getAddress() {
      let res = await this.ApiCall();
      this.address_data = res;
    },
    async ApiCall() {
      return await this.$axios.get("location").then((data) => {
        return data.data;
      });
    },
  },
  mounted() {
    this.getAddress();
  },
  components: { InnerBanner },
};
</script>
