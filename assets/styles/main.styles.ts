import { Dimensions, Platform, StyleSheet } from 'react-native';
import { theme } from '@/constants';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: theme.sizes.radius,
  },
  header: {
    paddingHorizontal: theme.sizes.base,
    marginVertical: theme.sizes.base,
  },
  sideHeader: {
    paddingHorizontal: theme.sizes.base / 2,
    marginVertical: theme.sizes.base,
  },
  tabs: {
    borderBottomColor: theme.colors.whiteGray,
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
    width: width - theme.sizes.margin * 2,
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.margin - 2,
    paddingVertical: theme.sizes.margin * 0.66,
    borderRadius: theme.sizes.radius * 2,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme.sizes.radius * 2,
    paddingHorizontal: theme.sizes.margin,
    paddingVertical: theme.sizes.margin / 2,
    bottom: 20,
    left: (width - theme.sizes.margin * 4) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme.colors.white,
    width: width - theme.sizes.margin * 4,
  },
  recommended: {},
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.base,
  },
  recommendedList: {},
  recommendation: {
    width: (width - theme.sizes.margin * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius * 2,
    marginVertical: theme.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius * 2,
    borderTopLeftRadius: theme.sizes.radius * 2,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.margin / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme.sizes.font / 1.25,
    color: theme.colors.dark,
    marginVertical: theme.sizes.margin / 5,
  },
  recommendationImage: {
    width: (width - theme.sizes.margin * 2) / 2,
    height: (width - theme.sizes.margin * 2) / 2,
  },
  avatar: {
    width: theme.sizes.margin,
    height: theme.sizes.margin,
    borderRadius: theme.sizes.margin / 2,
  },
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: theme.colors.dark,
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
    backgroundColor: theme.colors.whiteGray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active,
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
