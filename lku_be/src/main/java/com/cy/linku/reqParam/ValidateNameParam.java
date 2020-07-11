package com.cy.linku.reqParam;

public class ValidateNameParam {
    private String userName;

    @Override
    public String toString() {
        return "ValidateNameParam{" +
                "userName='" + userName + '\'' +
                '}';
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
