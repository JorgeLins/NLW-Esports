import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center'
  },
  header:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:32,
    marginTop:28,
    justifyContent: 'space-between'
  },
  logo:{
    width:72,
    height:40
  },
  rigth:{
    width:20,
    height:20,
  },
  gameImg:{
    marginTop:32,
    width:311,
    height:160,
    borderRadius: 8
  },
  containerList:{
    width:'100%'
  },
  contentList:{
    paddingLeft:32,
    paddingRight:64,
    alignItems:'flex-start'
  },
  EmptyText:{
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  emptyListContent: { 
    flex: 1, 
    alignItems: 'center',
  justifyContent:'center'
}
});