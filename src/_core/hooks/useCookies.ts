export function useCookies() {
    function addCookie(key: string, value: string) {
        document.cookie = key + "=" + value
    }

    function getCookie(key: string) {
        var nameEQ = key + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    return {
        addCookie,
        getCookie
    }
}