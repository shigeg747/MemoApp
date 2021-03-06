import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoLIstItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#b0b0b0" />
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoLIstItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#b0b0b0" />
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoLIstItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#b0b0b0" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoLIstItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
