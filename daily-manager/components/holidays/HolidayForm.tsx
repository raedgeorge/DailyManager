import { View, Text, StyleSheet, ScrollView } from "react-native";
import Input from "../common/Input";
import Button from "../common/Button";
import { HolidayModel } from "../../models/holiday-model";
import { useForm, SubmitHandler } from "react-hook-form";

const HolidayForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<HolidayModel>();

  const formSubmitHandler: SubmitHandler<HolidayModel> = (payload) => {
    console.log(payload);
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.header}>Add New Holiday</Text>
        <View style={styles.form}>
          <Input
            label="Start Date"
            control={control}
            required={true}
            name="startDate"
            error={errors.startDate}
          />
          <Input
            label="End Date"
            name="endDate"
            control={control}
            required={true}
            error={errors.endDate}
          />
          <Input
            label="Total Days"
            keyboardType="number-pad"
            name="totalDays"
            control={control}
            required={true}
            error={errors.totalDays}
          />
          <Input
            label="Notes"
            name="notes"
            control={control}
            required={false}
            error={errors.notes}
          />
          <Button label="Submit" onPress={handleSubmit(formSubmitHandler)} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HolidayForm;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 32,
    marginBottom: 32,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  form: {
    marginTop: 32,
  },

  formGroup: {
    marginBottom: 16,
  },

  input: {
    borderWidth: 2,
    borderColor: "#d5d5d5",
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
    height: 50,
  },
});
