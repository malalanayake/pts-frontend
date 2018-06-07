export class AppConst {

    public static WSO2_APIM_BASE = 'http://localhost:8080';
    public static WSO2_TOKEN_API = AppConst.WSO2_APIM_BASE + '/token';
    public static ACCESS_TOKEN = 'ACCESS_TOKEN';
    public static REFRESH_TOKEN = 'REFRESH_TOKEN';
    public static TOKEN_SCOPE = 'TOKEN_SCOPE';
    public static TOKEN_TYPE = 'TOKEN_TYPE';
    public static TOKEN_EXPIRE = 'TOKEN_EXPIRE';
    public static APP_ERROR = 'APP_ERROR';

    //Routes
    public static LOGIN_ROUTE = 'login';

    //BackEnd APIs
    public static API_BASE = 'http://localhost:9090/gateway/';
    public static DATA_SERVICE = 'data-service';
    public static DATA = 'data';
    public static DATA_API_BUS_OWNER = AppConst.API_BASE + '/' + AppConst.DATA_SERVICE + '/' + AppConst.DATA + '/bus-owner';

    public static WSO2_APP_CLIENT_SECRET = 'RnhGWVRBOGR5cGNmenBVYmtwc3dmTm1xZUo4YTpDcmhJTmhlOENwVDlQY2Y4d2pVbkhRVmdGQVFh';

    public static GOOGLE_MAPS_API_KEY = "AIzaSyB4w0Jd1rAVU3XjQSGPGRPA2vYvwX9KL1E";
}
