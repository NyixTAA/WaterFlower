import { StyleSheet } from "react-native"
import { colors } from "../styles/colors"

export const styles = StyleSheet.create({

    //Página inicial---------------------------

    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    flower: {
        height: 80,
        width: 80
    },

    title: {
        fontSize: 25,
        color: colors.gray[100],
        paddingTop: 18,
        paddingBottom: 8,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        fontFamily: 'Rubik',
        fontWeight: '800',
        letterSpacing: 0.5
    },

    subtitle: {
        fontFamily: 'Rubik',
        fontSize: 13,
        fontWeight: '400',
        color: colors.gray[100],
        width: 150,
        paddingTop: 4,
        textAlign: 'center',
        opacity: 0.8
    },

    brief: {
        fontFamily: 'Rubik',
        fontSize: 13,
        fontWeight: '300',
        color: colors.gray[100],
        width: 160,
        textAlign: 'center',
        opacity: 0.8,
        position: 'absolute',
        bottom: 0,
        paddingBottom: 90
    },

    link: {
        height: 200,
        width: 200
    },

    watermark: {
        position: 'absolute',
        color: colors.gray[500],
        bottom: 50,
        fontFamily: 'Rubik',
        fontSize: 12.5,
        fontWeight: 600
    },

    //Login---------------------------

    container_id: {
        position: 'absolute',
        top: 100,
        alignItems: 'center'
    },

    title_login: {
        alignItems: 'center',
        fontSize: 26,
        color: colors.gray[100],
        paddingTop: 18,
        paddingBottom: 8,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        fontFamily: 'Rubik',
        fontWeight: '800',
        letterSpacing: 0.5
    },

    login_container: {
        gap: 21,
        alignItems: 'center'
    },

    input: {
        fontFamily: 'Rubik',
        minHeight: 36,
        width: 303,
        borderRadius: 8,
        padding: 14,
        backgroundColor: colors.gray[100],
        outlineWidth: 0
    },

    button: {
        fontFamily: 'Rubik',
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        padding: 11,
        width: 260,
        borderRadius: 30,
        color: colors.gray[100],
        backgroundColor: colors.ui[200],
        textShadowColor: colors.gray[700],
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 2
    },

    //Selecionar Baia---------------------------

    title_container: {
        alignItems: 'center'
    },

    flower_2: {
        height: 45,
        width: 45
    },

    title_select: {
        textAlign: 'center',
        fontSize: 26,
        color: colors.gray[100],
        paddingTop: 18,
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        fontFamily: 'Rubik',
        fontWeight: '800',
        letterSpacing: 0.5,
        minWidth: 325
    },

    container_select: {
        paddingTop: 12,
        gap: 12
    },

    baia1: {
        gap: 3,
        flexDirection: 'row'
    },

    baia2: {
        gap: 3,
        flexDirection: 'row'
    },

    baia: {
        height: 75,
        width: 255,
        backgroundColor: colors.gray[100],
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        alignItems: 'center',
        gap: 5,
        padding: 15,
        flexDirection: 'row'
    },

    bayicon: {
        height: 40,
        width: 40
    },

    baia_name: {
        fontFamily: 'Rubik',
        fontWeight: '900',
        fontSize: 15.5

    },

    dot_offline: {
        height: 6,
        width: 6,
        borderRadius: 50,
        backgroundColor: colors.ui[500],
        alignSelf: 'center'
    },

    dot_online: {
        height: 6,
        width: 6,
        borderRadius: 50,
        backgroundColor: colors.ui[100],
        alignSelf: 'center'
    },

    baia_ip: {
        fontFamily: 'Rubik',
        fontWeight: '400',
        fontSize: 13.5
    },

    ins_baia: {
        flexDirection: 'column',
        justifyContent: 'center'
    },

    edit: {
        height: 75,
        width: 55,
        backgroundColor: colors.gray[100],
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    edit_icon: {
        height: 33,
        width: 33
    },

    backgroundImage_select: {
        flex: 1,
        alignItems: 'center'
    },

    container_flower: {
        alignItems: 'center',
    },

    container_pai: {
        paddingTop: 84,
        paddingHorizontal: 32,
        maxHeight: 450
    },

    link_home: {
        position: 'absolute',
        bottom: 55
    },

    container_add: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 85
    },

    addbaia: {
        backgroundColor: colors.ui[200],
        height: 65,
        width: 270,
        justifyContent: 'center',
        paddingHorizontal: 25,
        borderRadius: 8
    },

    addtext: {
        fontFamily: 'Rubik',
        fontSize: 16,
        fontWeight: 800,
        color: colors.gray[100],
        textShadowOffset: { width: 0, height: 2 },
        textShadowColor: colors.gray[800],
        textShadowRadius: 4
    },

    addicon: {
        position: 'absolute',
        right: -15,
        height: 84,
        width: 84,
        borderRadius: 50,
        backgroundColor: colors.gray[100],
        borderWidth: 5,
        borderColor: colors.ui[50],
        justifyContent: 'center',
        alignItems: 'center'
    },

    plusicon: {
        height: 35,
        width: 35
    },

    // Home---------------------------

    baia_menu: {
        position: 'absolute',
        top: 0,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 25,
        height: 70,
        width: 300,
        backgroundColor: colors.gray[100],
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },

    baia_selecionada: {
        flexDirection: 'column',
        paddingRight: 60,
        paddingLeft: 20
    },

    container_pai_home: {
        paddingTop: 84,
        paddingHorizontal: 32,
        maxHeight: 450
    },

    title_home: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.gray[100],
        paddingTop: 18,
        paddingBottom: 25,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        fontFamily: 'Rubik',
        fontWeight: '100',
        letterSpacing: 0.5,
        minWidth: 325
    },

    sub_home: {
        fontWeight: '800'
    },

    container_flower_home: {
        alignItems: 'center',
        paddingTop: 55
    },

    tabs_container: {
        paddingTop: 45,
        gap: 15
    },

    config_tab: {
        height: 115,
        width: 145,
        backgroundColor: colors.gray[100],
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    },

    config_tab_color: {
        position: 'absolute',
        top: -10,
        backgroundColor: colors.ui[75],
        height: 80,
        width: 155,
        transform: [{ rotate: '-5deg' }]
    },

    sensor_tab: {
        height: 115,
        width: 145,
        backgroundColor: colors.gray[100],
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    },

    sensor_tab_color: {
        position: 'absolute',
        top: -10,
        backgroundColor: colors.ui[400],
        height: 80,
        width: 155,
        transform: [{ rotate: '-5deg' }]
    },

    sys_start: {
        height: 80,
        width: 305,
        backgroundColor: colors.ui[300],
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },

    start_text: {
        fontFamily: 'Rubik',
        fontWeight: '800',
        fontSize: 16,
        letterSpacing: 0.5,
        color: colors.gray[100],
        paddingLeft: 20
    },

    config_icon: {
        width: 65,
        height: 65,
        shadowOffset: { width: 0, height: 1.5 },
        shadowColor: colors.gray[850],
        shadowRadius: 2
    },

    config_text: {
        fontFamily: 'Rubik',
        fontWeight: '800',
        fontSize: 12,
        letterSpacing: 0.5,
        color: colors.gray[750]
    },

    sensor_icon: {
        width: 65,
        height: 65,
        shadowOffset: { width: 0, height: 1.5 },
        shadowColor: colors.gray[850],
        shadowRadius: 2
    },

    sensor_text: {
        fontFamily: 'Rubik',
        fontWeight: '800',
        fontSize: 12,
        letterSpacing: 0.5,
        color: colors.gray[750]
    },

    // temporario...
    config_tab2: {
        height: 405,
        width: 295,
        backgroundColor: colors.gray[100],
        borderRadius: 6,
        padding: 20,
        position: 'relative',
        overflow: 'hidden'
    },

    config_tab_color2: {
        position: 'absolute',
        top: -15,
        right: -5,
        backgroundColor: colors.ui[75],
        height: 155,
        width: 310,
        transform: [{ rotate: '-5deg' }]
    },

    config_text2: {
        fontFamily: 'Rubik',
        fontWeight: '800',
        fontSize: 16,
        letterSpacing: 0.5,
        color: colors.gray[100],
        paddingTop: 10,
        paddingBottom: 60,
        textShadowOffset: { width: 0, height: 2 },
        textShadowColor: colors.gray[800],
        textShadowRadius: 4
    },

    config_text3: {
        fontFamily: 'Rubik',
        fontWeight: '800',
        fontSize: 14,
        letterSpacing: 0.5,
        color: colors.gray[750]
    },

    config_text_container: {
        gap: 20
    },

    backicon: {
        width: 10,
        height: 18,
        position: 'absolute',
        top: 20,
        left: 20
    },

    option_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 5,
        backgroundColor: colors.gray[150],
        padding: 5,
        borderRadius: 4,
        minHeight: 20,
        minWidth: 80
    },

    option_box_text: {
        fontFamily: 'Rubik',
        fontWeight: '800',
        fontSize: 10,
        color: colors.gray[750]
    }

})