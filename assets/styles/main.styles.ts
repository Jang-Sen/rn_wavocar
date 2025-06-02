import { Dimensions, Platform, StyleSheet } from 'react-native';
import { theme, theme2 } from '@/constants';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: theme.sizes.radius,
  },
  header: {
    paddingHorizontal: theme.sizes.base,
    marginVertical: theme.sizes.base,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.radius,
    marginHorizontal: theme.sizes.base * 1.2,
    marginBottom: theme.sizes.font * 2,
  },
  tab: {
    marginRight: theme.sizes.base,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3,
  },
  category: {
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destination: {
    width: width - theme2.sizes.padding * 2,
    height: width * 0.6,
    marginHorizontal: theme2.sizes.margin,
    paddingHorizontal: theme2.sizes.padding - 2,
    paddingVertical: theme2.sizes.padding * 0.66,
    borderRadius: theme2.sizes.radius,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme2.sizes.radius,
    paddingHorizontal: theme2.sizes.padding,
    paddingVertical: theme2.sizes.padding / 2,
    bottom: 20,
    left: (width - theme2.sizes.padding * 4) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme2.colors.white,
    width: width - theme2.sizes.padding * 4,
  },
  recommended: {},
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.base,
  },
  recommendedList: {},
  recommendation: {
    width: (width - theme2.sizes.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme2.colors.white,
    overflow: 'hidden',
    borderRadius: theme2.sizes.radius,
    marginVertical: theme2.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme2.sizes.radius,
    borderTopLeftRadius: theme2.sizes.radius,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme2.sizes.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme2.sizes.font / 1.25,
    color: theme2.colors.black,
    marginVertical: theme2.sizes.margin / 5,
  },
  recommendationImage: {
    width: (width - theme2.sizes.padding * 2) / 2,
    height: (width - theme2.sizes.padding * 2) / 2,
  },
  avatar: {
    width: theme2.sizes.padding,
    height: theme2.sizes.padding,
    borderRadius: theme2.sizes.padding / 2,
  },
  rating: {
    fontSize: theme2.sizes.font * 2,
    color: theme2.colors.white,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: theme2.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme2.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme2.colors.active,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 0,
  },
});

export default styles;
