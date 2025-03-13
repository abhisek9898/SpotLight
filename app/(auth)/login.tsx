import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "@/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    if (phone === "1234567890") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Alert.alert("OTP Sent");
        setStep(2);
      }, 1000);
    } else {
      Alert.alert("Invalid Phone Number", "Use 1234567890 for testing.");
    }
  };

  const handleVerifyOTP = async () => {
    if (otp === "1234") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.push("/(tabs)");
      }, 1000);
    } else {
      Alert.alert("Invalid OTP", "Try again.");
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.brandSection}>
          <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={32} color={COLORS.primary} />
          </View>
          <Text style={styles.appName}>Spotlight</Text>
          <Text style={styles.tagline}>Welcome to the Brotherhood</Text>
        </View>

        <View style={styles.illustrationContainer}>
          <Image
            source={require("@/assets/images/auth-bg-2.png")}
            style={styles.illustration}
            resizeMode="cover"
          />
        </View>

        <View style={styles.loginSection}>
          {step === 1 ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
              <TouchableOpacity
                style={[styles.button, loading && styles.disabledButton]}
                onPress={handleSendOTP}
                disabled={loading}
              >
                <Text style={styles.buttonText}>
                  {loading ? "Sending..." : "Send OTP"}
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Enter OTP"
                keyboardType="number-pad"
                value={otp}
                onChangeText={setOtp}
              />
              <TouchableOpacity
                style={[styles.button, loading && styles.disabledButton]}
                onPress={handleVerifyOTP}
                disabled={loading}
              >
                <Text style={styles.buttonText}>
                  {loading ? "Verifying..." : "Verify & Login"}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
