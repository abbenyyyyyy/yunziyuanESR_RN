package com.yunziyuanesr_rn;

import android.content.Context;
import android.content.pm.PackageManager;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

/**
 * Created by abben on 2017/10/10.
 */

public class AndroidAppVersionModule extends ReactContextBaseJavaModule {

    public AndroidAppVersionModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AndroidAppVersionModule";
    }

    @ReactMethod
    public void getAppVersion(Promise promise) {
        String appVersion = "";
        try {
            appVersion = getReactApplicationContext().getPackageManager().getPackageInfo("com.yunziyuanesr_rn", 0).versionName;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }

        WritableMap writableMap = Arguments.createMap();
        writableMap.putString("appVersion", appVersion);
        try {
            promise.resolve(writableMap);
        } catch (IllegalViewOperationException e) {
            promise.reject(e);
        }
    }

}
