package com.cy.linku.reqParam;

public class LoginParam {
    private String userAccount;
    private String userPwd;

    @Override
    public String toString() {
        return "LoginParam{" +
                "userAccount='" + userAccount + '\'' +
                ", userPwd='" + userPwd + '\'' +
                '}';
    }

    public String getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(String userAccount) {
        this.userAccount = userAccount;
    }

    public String getUserPwd() {
        return userPwd;
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd;
    }
}
