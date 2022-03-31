<template>
  <div>
    <button @click="pay" class="success">Pay</button>
  </div>
</template>

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
