describe("interface", function(){
  interface = new Interface;

  describe('MVP: creating a todo list and adding tasks to it', function(){

    it('can add tasks from the search to the data storage', function(){
      interface.addNewTask("Walk the dog");
      expect(interface.displayTask).toBe("Walk the dog");
    });

  });

});
