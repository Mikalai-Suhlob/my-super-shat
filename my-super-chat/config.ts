export default class Config {
  public static httpPort: number = 8080
  public static httpAddress: string = '0.0.0.0'
  public static mongoDbString: string = 'mongodb://127.0.0.1:27017/chat-app'
  public static sessionSecret: string = 'secretKeyForChatApp'
  public static sessionIdName: string = 'keySession'
  public static publicDir: string = 'dist'
}