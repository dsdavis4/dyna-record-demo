# Dyna-Record Demo Project

This demo project showcases how to use **dyna-record** for advanced data modeling in DynamoDB. The project leverages **AWS CDK** to set up a DynamoDB table and provides mock models to help you explore dyna-record's features, including creating, updating, deleting, and querying data using TypeScript.

- **GitHub:** [dyna-record on GitHub](https://github.com/dsdavis4/dyna-record)
- **npm:** [dyna-record on npm](https://www.npmjs.com/package/dyna-record)

---

## 🚀 **Prerequisites**

### Before you start, ensure you have:

- **Node.js** installed (v18 or later recommended)
- **npm** (comes with Node.js)
- **AWS CDK** installed globally (`npm install -g aws-cdk`)
- **AWS CLI** configured with valid AWS credentials (`aws configure`)

---

## 🛠️ **Getting Started**

### 1. **Clone the Repository**

```bash
git clone git@github.com:dsdavis4/dyna-record-demo.git
cd dyna-record-demo
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Configure AWS Credentials**

Make sure your terminal is configured with the appropriate AWS credentials:

```bash
aws configure
```

Alternatively, ensure your AWS environment variables are set:

```bash
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret_key
export AWS_REGION=your_region
```

### 4. **Deploy the CDK Stack**

This will create a DynamoDB table defined in the CDK app:

```bash
npx cdk deploy
```

### 5. **Use the Playground**

The `index.ts` file is your playground for interacting with dyna-record. You can experiment with:

- **Creating entities**
- **Updating records**
- **Deleting items**
- **Querying data**

Feel free to modify `index.ts` and explore different use cases.

### 6. **Run the Demo**

You have two options to run the code:

#### Option 1: Run via npm script

```bash
npm run debug
```

#### Option 2: Use the built-in VSCode debugger

- Open the project in **Visual Studio Code**
- Select the **Run and Debug** panel (`Ctrl + Shift + D`)
- Choose the **Debug** configuration and start debugging

---

## 🔍 **Logging**

The `DYNA_RECORD_LOGGING_ENABLED` environment variable is set to **true** in this demo. This enables verbose logging of all DynamoDB operations, providing insights into how dyna-record interacts with the database:

```bash
export DYNA_RECORD_LOGGING_ENABLED=true
```

Logs will include:

- **PutItem**, **UpdateItem**, **DeleteItem**, and **Query** operations

---

## 📂 **Project Structure**

```plaintext
dyna-record-demo/
├─ lib/                               # CDK Infrastructure code
│   └─ dyna-record-demo-stack.ts      # Defines the DynamoDB table
├─ src/                               # Source code for dyna-record usage
│   ├─ models/                        # Example models using dyna-record
│   └─ index.ts                       # Playground for running dyna-record operations
├─ index.ts                           # Entry point for the demo app
├─ cdk.json                           # CDK App configuration
├─ package.json                       # Project dependencies and scripts
└─ tsconfig.json                      # TypeScript configuration

```

---

## 🧹 **Cleanup**

To avoid unwanted AWS charges, clean up your resources when you're done:

```bash
npx cdk destroy
```

---

## 🤝 **Contributing**

If you encounter issues or want to contribute improvements, feel free to open a **Pull Request** or create an **Issue** in the GitHub repository.

---

## 📧 **Feedback & Questions**

For questions, discussions, or feedback, please join the conversation on the [dyna-record GitHub project](https://github.com/dsdavis4/dyna-record).

Happy coding! 🚀
