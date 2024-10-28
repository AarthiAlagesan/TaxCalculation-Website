
# TaxFiler

**TaxFiler** is an interactive and user-friendly tax calculation website for the 2024 financial year, focusing on the New Tax Regime. With a sleek, blue-themed interface, TaxFiler allows users to calculate their income tax, access their calculation history, and get their results emailed to them.
https://aarthi-taxcalculation-website.netlify.app/

---

## 🚀 Project Overview

TaxFiler simplifies income tax calculations for users, enabling them to easily navigate and perform complex tax calculations in seconds. By entering basic income details, users can instantly view their tax liabilities and receive detailed calculations through email.

## 🖥️ Website Structure

1. **Home Page**  
   - A welcoming page that describes the website's purpose and highlights its key functionalities.
   - A **Get Started** button to guide users directly to the login page.

2. **Features**
   - **Responsive Design**: Optimized for both desktop and mobile devices.
   - **User Authentication**: Allows secure user login with Google Sheets integration for data storage.
   - **Real-time Tax Calculation**: Calculate tax based on salary, house property, and other income sources.
   - **Email Results**: Users can receive a detailed breakdown of their tax calculation via email.
   - **Data Storage with MongoDB**: Tax calculation results are securely stored in MongoDB for easy access and future reference.

3. **Login and Authentication**
   - Accessible through the **Login** button or by selecting **Get Started** from the Home Page.
   - Users are required to enter their **username**, **email**, and **password**.
   - Successful logins store user data in Google Sheets for secure storage.

4. **Tax Calculation Page**
   - Allows users to calculate their tax by entering details including:
     - **Name**
     - **Email**
     - **Phone Number**
     - **Salary** (after deducting eligible exemptions like HRA, LTA, etc.)
     - **House Property Income**
     - **Other Sources** (interest, dividends, etc.)
   - Displays the tax result based on the 2024 New Tax Regime.

5. **Contact Us Page**
   - Provides basic contact information for user support and inquiries.

## 🔑 How It Works

1. **Login Process**:
   - After clicking **Get Started** or **Login**, users are prompted to enter their details.
   - Once logged in, the user data is saved on Google Sheets.
  
2. **Calculate Tax**:
   - Users can proceed to the **Tax Calculation Page** and enter the necessary financial details.
   - After calculating, the website displays a detailed breakdown of the tax calculation.
  
3. **Email and Data Storage**:
   - If the user opts to send the results to their email, the calculation results are emailed directly.
   - The calculation results are also stored in MongoDB for future reference.

---
![Screenshot (55)](https://github.com/user-attachments/assets/2097b856-a0aa-4a22-a487-23f1215056b4)
![Screenshot (57)](https://github.com/user-attachments/assets/b5f013f9-c4bc-40fd-833e-f1e911b73da8)
![Screenshot (58)](https://github.com/user-attachments/assets/b6e6a7d5-b84e-451a-bed8-35a98d8ff6be)
![Screenshot (59)](https://github.com/user-attachments/assets/907b014c-ff4e-4f02-b570-7f8931ed1e83)


## 💡 Future Enhancements

- **Expanded Tax Regime Options**: Addition of an option for Old Tax Regime calculations.
- **Advanced Analytics**: Allow users to compare multiple calculation results over time.
- **Enhanced Data Security**: Additional encryption measures for sensitive data.


