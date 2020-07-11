package com.cy.linku.models.param;

public class ValidateAccountParam {
    private String userAccount;

    @Override
    public String toString() {
        return "ValidateAccountParam{" +
                "userAccount='" + userAccount + '\'' +
                '}';
    }

    public String getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(String userAccount) {
        this.userAccount = userAccount;
    }
}
