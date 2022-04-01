<template>
  <div class="cart">
    <navbar />
    <v-app>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-card>
              <v-container
                ><h1 style="text-align: center">Your Courses</h1>
                <v-divider> </v-divider>
                <h2>Courses</h2>
              </v-container></v-card
            >
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="5">
            <v-card>
              <v-container>
                <h2 style="text-align: center">Cart</h2>
                <v-divider> </v-divider> <br />

                <h3>Amount Of Course</h3>
                <br />
                <v-row>
                  <v-col md="9">
                    <v-text-field
                      label="Cupon code"
                      outlined
                      autofocus
                      placeholder="Enter Cupon Code"
                  /></v-col>
                  <v-btn>Apply</v-btn>
                </v-row>
                <h3>Final Amount Of Course</h3>

                <br />
                <v-btn @click="pay" class="btn success" large block>Pay</v-btn>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-card> <h2>More Courses</h2> </v-card>
        </v-row> -->
      </v-container>
    </v-app>
  </div>
</template>
<style scoped>
.cart {
  background: #292928;
  color: whitesmoke;
}

.btn {
  border-radius: 10px;
  padding: 20px;
  font-size: 15px;
}
</style>

<script>
export default {
  data() {
    return {
      script: `https://checkout.razorpay.com/v1/checkout.js`,
    };
  },
  methods: {
    async loadRazorPay() {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = this.script;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    },

    async pay() {
      const result = await this.loadRazorPay();
      if (!result) {
        alert("Failed to load razorpay script");
        return;
      }
      const data = {
        course_id: `620cc4e3ed391d5f33f13b84`,
      };
      let response = await this.$axios.post("/payment/create", data);
      console.log(response.data.data);

      const paymentObject = new window.Razorpay({
        key: `rzp_test_WdCmBIvGEANsUe`,
        ...response.data.data,
      });
      paymentObject.open();
    },
  },
  // async created() {
  // 	const result = await this.loadRazorPay();
  // 	if (!result) {
  // 		alert("Failed to load razorpay script");
  // 		return;
  // 	}
  // 	const options = {
  // 		key: `rzp_test_WdCmBIvGEANsUe`,
  // 		amount: `The amount must match with that is defined on backend`,
  // 		name: `The name you want to be displayed on the razorpay payment screen`,
  // 		description: `Description of the payment`,
  // 		order_id: `This will come from backend`,
  // 		image: `Your business logo`,
  // 		handler: function () {
  // 			// It is function executed on success
  // 		},
  // 		prefill: {
  // 			name: `Your customer name`,
  // 			email: `Your customer email`,
  // 			contact: `Your customer contact`,
  // 		},
  // 	};
  // 	const paymentObject = new window.Razorpay(options);
  // 	paymentObject.open();
  // },
};
</script>
