export class URLLoader {
    constructor() {
        
    }

    loadScripts() {
        const dynamicScripts = [
         'https://code.jquery.com/jquery-2.2.4.min.js',
         '../assets/scripts/jquery-ui-1.10.1.custom.min.js',
         '../assets/bootstrap/js/bootstrap.min.js',
         //'../assets/scripts/datatables/jquery.dataTables.js',
         'https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js',
         'https://cdn.datatables.net/v/dt/b-1.6.5/b-flash-1.6.5/b-html5-1.6.5/datatables.min.js',
         'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js',
         'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js',
         'https://cdn.datatables.net/v/dt/dt-1.10.23/b-1.6.5/b-colvis-1.6.5/b-html5-1.6.5/datatables.min.js',
         'https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.23/b-1.6.5/b-html5-1.6.5/b-print-1.6.5/datatables.min.js',
         '../assets/js/init.js',
        ];
        for (let i = 0; i < dynamicScripts.length; i++) {
          const node = document.createElement('script');
          node.src = dynamicScripts[i];
          node.type = 'text/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.getElementsByTagName('app-root')[0].appendChild(node);
        }
      }  


}