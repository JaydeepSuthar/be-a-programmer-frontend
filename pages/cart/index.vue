<template>
	<div class="cart">
		<navbar />
		<v-app>
			<v-container>
				<v-row>
					<v-col cols="12" sm="6" md="6">
						<v-card>
							<v-container>
								<h2>Items in Cart</h2>
								<v-divider> </v-divider>

								<div class="cart-items">
									<v-list three-line>
										<template
											v-for="(item, index) in cartItems"
										>
											<v-list-item :key="index">
												<v-list-item-avatar>
													<v-img
														src="https://avatars.githubusercontent.com/u/52647252?v=4&s=460"
													></v-img>
												</v-list-item-avatar>

												<v-list-item-content>
													<v-list-item-title>
														{{ item.title }}
													</v-list-item-title>
													<v-list-item-subtitle>

													&#8377;	{{ item.price }}

													</v-list-item-subtitle>
													<hr />
												</v-list-item-content>
											</v-list-item>
										</template>
									</v-list>
								</div>
							</v-container>
						</v-card>
					</v-col>
					<v-spacer></v-spacer>
					<v-col cols="12" sm="6" md="5">
						<v-card>
							<v-container>
								<h2 style="text-align: center">Payment</h2>
								<v-divider> </v-divider> <br />

								<v-row>
									<v-col md="9">
										<v-text-field
											label="Coupon code"
											outlined
											autofocus
											placeholder="Enter Cupon Code"
											v-model="coupon"
										/>
										<v-btn
											@click="checkCouponIsValidOrNot"
											color="primary"
											>Apply</v-btn
										>
									</v-col>
								</v-row>
								<p class="mt-5">Total: Rs. {{ totalPrice }}</p>

								<br />
								<v-btn
									@click="pay"
									class="btn success"
									large
									block
									>Pay</v-btn
								>
							</v-container>
						</v-card>
					</v-col>
				</v-row>
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
	async asyncData({ $axios }) {
		let response = await $axios("/cart");
		let cartItemFromBackend = response.data.data;

		let courseInCart = cartItemFromBackend.map(
			(item) => item.Course_details
		);

		return {
			cartItems: courseInCart,
		};
	},
	data() {
		return {
			coupon: "",
			script: `https://checkout.razorpay.com/v1/checkout.js`,
			cartItems: [],
		};
	},
	methods: {
		async checkCouponIsValidOrNot() {
			try {
				let response = await this.$axios.post("/course/coupon/check", {
					coupon: this.coupon,
				});

				alert(`coupon is applied`);
			} catch ({ response }) {
				console.log(response);

				if (response.status == 400) {
					alert(response.data.msg);
				}
			}
		},

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

	computed: {
		totalPrice() {
			let price = 0;
			this.cartItems.map((item) => (price += item.price));
			return price;
		},
	},
};
</script>
