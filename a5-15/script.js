const create = $(".create")
const swap = $(".swap")
const result = $(".text")   

result.html('Здесь будет ваш текст...')

let beginText  = {
    "text":
    [`Жили-были {var1} да {var2}`,
    `Была у них {var3}`,
    `Снесла {var3} {var4}, не простое - золотое`,
    `- {var1} бил, бил - не разбил`,
    `- {var2} била, била - не разбила`,
    `{var5} бежала, {var6} задела, {var4} упало и разбилось.`,
    `{var1} плачет, {var2} плачет, а {var3} кудахчет:`,
    `{speach}`]
}

function init() { 
    const varHtml1 = $('.var1')
    const varHtml2 = $('.var2')
    const varHtml3 = $('.var3')
    const varHtml4 = $('.var4')
    const varHtml5 = $('.var5')
    const varHtml6 = $('.var6')
    const speachHtml = $('.speaсh')

    const var1 = varHtml1.val()
    const var2 = varHtml2.val()
    const var3 = varHtml3.val()
    const var4 = varHtml4.val()
    const var5 = varHtml5.val()
    const var6 = varHtml6.val()
    const speach = speachHtml.val()

    const text  = {
        "text":
        [`Жили-были ${var1} да ${var2} `,
        `Была у них ${var3} `,
        `Снесла ${var3} ${var4}, не простое - золотое `,
        `- ${var1} бил, бил - не разбил `,
        `- ${var2} била, била - не разбила `,
        `${var5} бежала, ${var6} задела, ${var4} упало и разбилось. `,
        `${var1} плачет, ${var2} плачет, а ${var3} кудахчет: `,
        `${speach}`]
    }
    
    return text.text
}

$(document).ready(function() {
    create.click(function() {
        result.html(beginText.text)
    })
    swap.click(function() {
        result.html(init())
        console.log(init())
    })
})
