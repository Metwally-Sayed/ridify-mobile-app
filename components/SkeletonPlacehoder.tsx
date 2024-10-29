import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

type Props = {};

const SkeletonPlacehoder = (props: Props) => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={80}
            height={20}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonPlacehoder;

const styles = StyleSheet.create({});
