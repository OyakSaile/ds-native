import DatePicker from "react-native-modern-datepicker";

interface DatePickerPropsI {
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: string;
}
export default function DatePickerTST({
  selectedDate,
  setSelectedDate,
}: DatePickerPropsI) {
  return (
    <DatePicker
      selected={selectedDate}
      onSelectedChange={(date) => setSelectedDate(date)}
    />
  );
}
