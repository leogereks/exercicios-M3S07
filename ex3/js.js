function fatorial(n) {
    let numero=1
    for(i=1;i<=n;i++){
    numero *=i;
    }
    
    return console.log('A fatorial de '+n+"é: ="+numero)
    
    }
    let n = 10
    fatorial(n)
    
    function inverte(string){
        let inverte=' ';
        for ( i = string.length - 1; i >= 0; i--) { 
            inverte += string[i]; 
        }
        return console.log(inverte)
    }
    inverte('banana')
    
    const palavras={
    
        maior: function(string) {
            let palavra=string[0];
            for(i=0;i<string.length;i++){
            
                if(string[i].length>palavra.length){ palavra=string[i] }
                
            }
            return console.log(palavra)
        },
    
        menor: function(string){
           
            let palavra=string[0];
            for(i=0;i<string.length;i++){
            
                if(string[i].length < palavra.length){ palavra=string[i]}
              
            }
            return console.log(palavra)
        }
    }
    let array = ['java', 'javascript', 'python', 'html', 'css']
    
    palavras.maior(array)
    palavras.menor(array)
    
    function primos(start, end){
        let divisores;
        let primos
        for(count=start ; count<=end ; count++){
            divisores=0;
            for(aux=1 ; aux<=count ; aux++){
                if(count % aux == 0)
                    divisores++;
            }
            if(divisores==2){
               primos = count ;
            }
        }
        return console.log(primos)
    }
    primos(0, 100)