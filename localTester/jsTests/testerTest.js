function main(args){
    userIo.writeStringJs("Test Input Required");
    while(!userIo.stringAvailableJs())
       jsSystem.uSleep(16666);
    var inputTest = userIo.readString();
    userIo.writeString(inputTest + irdaCommands.IRDA_COMMAND_GET_BYTE);
}
