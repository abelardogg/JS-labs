const Module = (function(){
    function privateFunction(){
        console.info('Hello im a private function!')
    }
    privateFunction();

    return {
        publicFunction: function(){
            console.info('Hello im a public function!')
        }
    }
})(); // This will be autoexecuted.


