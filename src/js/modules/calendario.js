export const calendario = {
    today: new Date(),
    meses: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"],
    dias:["Lu","Ma","Mi","Ju","Vi","Sa","Do"],
    calendario: function(){
        return `
        <div class="month">      
        ${this.meses[this.today.getMonth()-1]} <br>
        <span style="font-size:18px">${this.today.getFullYear()}</span>
        </div>
        <ul class="weekdays">
            ${this.renderDias()}
        </ul>

        <ul class="days">  
            ${this.numDias()}
        </ul>`
    },
    renderDias: function(){
        let output = "";
        for (let i = 0; i < this.dias.length; i++) {
            output += `<li>${this.dias[i]}</li>`
        }
        return output;
    },
    numDias: function(){
        let output = "";
        for (let i = 1; i <= 31; i++) {
            if (i == this.today.getDate())
            {
                output +=`<li><span class="active">${i}</span></li>`;
            }
            else
            {
                output+=`<li>${i}</li>`;
            }
        }
        return output;
    }
}
