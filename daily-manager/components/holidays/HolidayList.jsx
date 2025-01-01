import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { fetchHolidays } from "../../database/db";

export const HolidayList = () => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchHolidays().then((result) => {
        console.log("result");
        console.log(result);
      });
    }
  }, [isFocused]);

  return <Text>HolidayList</Text>;
};
