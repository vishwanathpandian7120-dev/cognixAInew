const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGODB_URI;
console.log('Testing URI:', uri.replace(/:([^@]+)@/, ':****@')); // Hide password

const testConnection = async () => {
    try {
        console.log('Connecting...');
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });
        console.log('✅ Success!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Failed:', err.message);
        if (err.message.includes('authentication failed')) {
            console.log('💡 TIP: This is an AUTHENTICATION issue. The user or password is incorrect.');
        }
        process.exit(1);
    }
};

testConnection();
