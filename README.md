# saucedemo
This is a project to test the saucedemo website: 
https://www.saucedemo.com/  

## Installation

To set up and run this project locally, follow these steps:

1. **Fork the Repository:**
   - Go to the GitHub repository page: [https://github.com/Sophie-onbelet/saucedemo](https://github.com/Sophie-onbelet/saucedemo)
   - Click the "Fork" button in the top-right corner to create your own copy of the repository.

2. **Clone the Forked Repository:**
   - Open your terminal or command prompt.
   - Run the following command to clone your forked repository to your local machine:
     ```sh
     git clone https://github.com/YOUR-USERNAME/saucedemo.git
     ```
   - Replace `YOUR-USERNAME` with your GitHub username.
   - Navigate into the project directory:
     ```sh
     cd saucedemo
     ```
3. **Install Dependencies:**
   - Run the following command to install the necessary dependencies:
     ```sh
     npm install
     ```

4. **Set Environment Variables:**
   - Create a `.env` file in the root directory of the project and add the following:
     ```plaintext
     LOCKEDOUT_USER=locked_out_user
     PASSWORD=secret_sauce
     ```

To run the tests, use the following command:
```sh
npx playwright test


