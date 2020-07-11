package com.cy.linku.models.param;

public class CreateWeiboParam {
    private int userId;
    private String weiboTextContent;

    public int getUserId() {
        return userId;
    }

    @Override
    public String toString() {
        return "CreateWeiboParam{" +
                "userId=" + userId +
                ", weiboTextContent='" + weiboTextContent + '\'' +
                '}';
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getWeiboTextContent() {
        return weiboTextContent;
    }

    public void setWeiboTextContent(String weiboTextContent) {
        this.weiboTextContent = weiboTextContent;
    }
}
