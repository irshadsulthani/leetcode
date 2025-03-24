/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let uniqueEmails = new Set();

    for (let email of emails) {
        let [local, domain] = email.split('@');
        local = local.split('+')[0]; 
        local = local.replace(/\./g, ''); 
        uniqueEmails.add(local + '@' + domain); // Store the normalized email
    }

    return uniqueEmails.size;
};