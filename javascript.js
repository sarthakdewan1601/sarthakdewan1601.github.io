function calculate()
{
	var question1=document.quiz.question1.value;
	var question2=document.quiz.question2.value;
	var question3=document.quiz.question3.value;
	var question4=document.quiz.question4.value;
	var question5=document.quiz.question5.value;
	var score=0;
	if(question1=='narrow road ahead')
	{
		score++;
	}
	if(question2=='no u-turn')
	{
		score++;
	}
	if(question3=='18')
	{
		score++;
	}
	if(question4=='true')
	{
		score++;
	}
	if(question5=='zebra crossing')
	{
		score++;
	}
	alert("YOU SCORED "+score+" MARK'(S)' OUT OF 5.");
	var message=["YOU NEED TO KNOW A LOT MORE","BETTER LUCK, NEXT TIME","WELL DONE!!","EXCELLENT, KEEP IT UP"];
	if(score<=1)
	{
		alert(message[0]);
	}
	if(score==2 && score==3)
	{
		alert(message[1]);
	}
	if(score>3 && score<=4)
	{
		alert(message[2]);
	}
	if(score==5)
	{
		alert(message[3]);
	}
}
