package com.cy.linku.reqParam;

public class RegisterParam {
    private String userAccount;
    private String userName;
    private String userPwd;

    @Override
    public String toString() {
        return "RegisterParam{" +
                "userAccount='" + userAccount + '\'' +
                ", userName='" + userName + '\'' +
                ", userPwd='" + userPwd + '\'' +
                '}';
    }

    public String getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(String userAccount) {
        this.userAccount = userAccount;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPwd() {
        return userPwd;
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd;
    }
}
