#
# Ticket Haul: Ticket Purchasing - Frontend

<a name="readme-top"></a>
<br />
<div align="center">

  <h3 align="center">Ticket Haul</h3>

  <p align="center">
A project which implements a mock checkout page for buying tickets to a show using React as a frontend library. With Ticket Haul, users can select a show from a list of upcoming shows, select the quantity, enter their basic billing information, and see their final cost with fees before checking out. Credit card data is not processed at the moment but the project simulates how the payment process would actually work in real life.
    <br />
    <a href="https://github.com/alain-kubwayo/ticket-purchasing-frontend-react"><strong>Explore Ticket Haul project »</strong></a>
    <br />
    <a href="https://github.com/alain-kubwayo/ticket-purchasing-frontend-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/alain-kubwayo/ticket-purchasing-frontend-react/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

Ticket Haul is a ticket purchasing frontend project in which a mock checkout page for buying tickets to a show is implemented. Users have the ability to select a show from a list of upcoming shows, select the quantity, and enter their basic billing information and finally see the final cost with fees before checking out. While the real credit card data is not processed, the project simulates how this process would work in an actual project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

Before you begin, you'll need to make sure that you have Node.js and npm installed on your machine. You can download the latest version of Node.js from the official website: https://nodejs.org

Once you have Node.js installed, you can clone this repository and install the dependencies:

```bash
git clone https://github.com/alain-kubwayo/ticket-haul.git

cd ticket-haul

npm install

npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Testing

Once the project is set up locally and the local development server is up and running, the project can be tested in the following fashion:

* The homepage lists upcoming shows and the user can select one or more shows and adjust the quantity/number of tickets for each show. 
* The user will not be able to go to view what's in the car until they add at least 1 ticket to the cart. Attempting to do so, will alert a message to inform them that they should add to cart before viewing the checkout page.
* Once, the cart is no longer empty, a user can then view what's in the cart by clicking at the cart icon at the top right icon in navigation. 
* A checkout page will display information about ticket(s) baught the user will hae to provide the billing information and accept terms before placing an order.
* Once the button to place order is no longer disabled, a user can then click and will see a loading message followed by the success message if the order was successful!

## Credit Card Testing

To test for valid card numbers, the user should consider using either of the following:

* User's own real credit card information (Card number, expiration date, and CVC)

* One of the testing numbers exposed by the ATM manufacturing companies. See the list below:

| Brand | Number            | CVC           | Date              |
|-------|-------------------|---------------|-------------------|
| Visa  | 4242424242424242  | Any 3 digits  | Any future date   |
| Visa (debit)  | 4000056655665556  | Any 3 digits  | Any future date   |
| Mastercard  | 5555555555554444  | Any 3 digits  | Any future date   |
| American Express  | 371449635398431  | Any 3 digits  | Any future date   |
| Discover  | 6011111111111117  | Any 3 digits  | Any future date   |
| Diners Club  | 3056930009020004  | Any 3 digits  | Any future date   |

Please visit [this link by Stripe](https://stripe.com/docs/testing) for a full list of the extensive list.




<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b ft/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin ft/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Author

- LinkedIn - [alain-honore-kubwayo](https://www.linkedin.com/in/alain-honore-kubwayo-47401626a/)
- Website - [alainkubwayo.dev](https://www.alainkubwayo.dev)

## Socials:

<p align="left">

[![Connect on LinkedIn](https://img.shields.io/badge/--linkedin?label=LinkedIn&logo=LinkedIn&style=social)](https://www.linkedin.com/in/alain-honore-kubwayo-47401626a/) [![Send me email](https://img.shields.io/badge/--gmail?label=Gmail&logo=Gmail&style=social)](mailto:ahkubwayo@gmail.com)

---

</p>