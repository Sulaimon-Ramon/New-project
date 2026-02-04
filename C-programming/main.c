// #include <stdio.h>
// #include <time.h>
// #include <stdlib.h>
// #include <stdbool.h>



// Function to print greeting message
void greet(){
    int num1 = 6;
    int num2 = 10;
    
    printf("%d", num1 + num2);
}

int main() {
    greet();
    // Operators
    int r = 50 , a = 40, m = 30, o = 20, n = 10;
    int sum = r + a  + m + o + n;
    printf("%d\n",sum);
    
    double x = 10.5 ,y = 20.5, z = 30.5;
    double result = x + y + z;
    printf("%.5lf\n", result );
    
    float d = 60;
    float results = d/7;
    printf("%.3f\n", results);
    
    
    // Type Conversion
    int b = 20;
    int c = 90;
    double add = b + c;
    printf("%lf\n", add);
    
    float g = 20.5;
    int h = 39;
    int output = (int)g + h;
    printf("%d\n", output);
     
     
    int j = 60;
    int k = 7;
    double v = (double)j/k;
    printf("%lf\n", v);

    //  if/else statement
     
     int age = 6;

     if(age >= 18){
         printf("you should be in the university");
     }else if(age >=11 && age < 18){
        printf("you should be in secondary school");
    }else {
        printf("you should be in primary school");
    }

    int num ;
        
       printf("Enter a number : ");
       scanf("%d", &num);
       
       if(num %  2 == 0 ){
           printf("%d is an even number", num);
       }else{
           printf("%d is an odd number", num);
       }

    int age ;
  
     printf("Enter your age : ");
     scanf("%d", &age);
  
    if (age <= 0){
        printf("Invalid age");
    }else if (age >= 18){
        printf("you are eligible to vote");
    }else{
        printf("you are not eligible to vote");
    }

    // Tenary operator
     int votersAge = 90;
     
      (votersAge >= 18) ? printf("you are eligible") : printf("you are not eligible");
      
      int number = 9;
      
      (number % 2 == 0) ? printf("%d is an even number, number") : printf("%d is an odd number", number);
    
    
    // Switch case
    int month = 7;
    switch (month){
        case 1 :
        printf("January");
        break;
        
        case 2 :
        printf("February");
        break;
        
        case 3 :
        printf("March");
        break;
        
        case 4 :
        printf("April");
        break;
        
        case 5 :
        printf("May");
        break;
        
        case 6 :
        printf("june");
        break;
        
        case 7 :
        printf("July");
        break;
        
        case 8 :
        printf("August");
        break;
        
        case 9 :
        printf("September");
        break;
        
        case 10 :
        printf("October");
        break;
         
        case 11 :
        printf("November");
        break;
        
        case 12 :
        printf("December");
        break;
    }
    
    //  loop
      int i;
      for(i=0 ; i<20; i+=2){
          printf("%d\n", i);
      }

       int i = 0;
    while (i < 10){
        printf("%d\n", i);
        i++;
    }
    

    // time_t currentTime ;
    // time(&currentTime);
    // printf("current time is %s", ctime
    // (&currentTime));
        
    int r = rand();
    printf("%d\n", r);

    int num , rev = 0 , digit;
    
    printf("Enter a number : ");
    scanf("%d", &num);
    
    while(num !=0){ 
        digit = num % 10;
        rev = rev* 10 + digit;
        num = num / 10;
    }
    
    printf("reverse Number : %d\n", rev);

    int Numbers[] = {5,4,3,2,1};
    int size = sizeof(Numbers) / sizeof(Numbers[0]);
    int sum = 0;
    
    for (int i = 0; i < size; i++) {
        sum += Numbers[i];
    }
    
    printf("The sum of the numbers is: %d\n", sum);

    // boolean comparision operators
    
    // int num = 16;
    // double height = 30.5;
  
    // bool result = (num >= 10) && (height < 60);
  
    // printf("%d\n", result);
    
    
    int myNumbers[] = {35,40,19,16};    
   
    int sum = myNumbers[0] + myNumbers[2];
    int size = sizeof(myNumbers) / sizeof 
    (myNumbers[0]);
    
    int lowest = myNumbers[0];
    
    for(int i = 1; i < size; i++){
        if(myNumbers[i] < lowest){
            lowest = myNumbers[i];
        }
    }
    
    int highest = myNumbers[0];  
    
    for(int i = 1; i > size; i++){
        if(myNumbers[i] > highest){
            highest = myNumbers[i];
        }
    }
    
    int num ;
    printf("Enter a number : ");
    scanf("%d", &num);
    
    if ( num % 2 == 0 ){
        printf("%d is even \n", num);
    }else{
         printf("%d is odd \n", num);
    }
    
   
    
    printf("the lowest number is %d\n",lowest);
    
    printf("the highest number is %d\n",highest);
    
    printf("%d\n",sum);
    
    printf("%d",size);
    
    return 0;
}