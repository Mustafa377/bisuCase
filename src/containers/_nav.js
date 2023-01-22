export default [{
    _name: 'CSidebarNav',
    _children: [
        {
            _name: 'CSidebarNavItem',
            name: 'Anasayfa',
            to: '/anasayfa',
            icon: 'cil-home',
        },

        // OPERASYON - START
        {
            _name: 'CSidebarNavTitle',
            _children: ['Operasyon']
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Teklif Talepleri',
            to: '/teklif-talepleri/',
            icon: 'cil-basket'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Poliçeler',
            to: '/policeler/',
            icon: 'cil-File'
        },
        // OPERASYON - END
        // YÖNETİM - START
        {
            _name: 'CSidebarNavTitle',
            _children: ['Yönetim'],
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Kullanıcılar',
            to: '/kullanicilar/',
            icon: 'cib-opsgenie'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Partnerler',
            to: '/partnerler/',
            icon: 'cil-people'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Üyeler',
            to: '/uyeler/',
            icon: 'cil-user'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Sigortalılar',
            to: '/sigortalilar/',
            icon: 'cil-user-follow'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Sigorta Firmaları',
            to: '/sigorta-firmalari/',
            icon: 'cil-factory' 
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Yetki Grupları',
            to: '/yetki-gruplari/',
            icon: 'cib-auth0'
        },
        /* {
            _name: 'CSidebarNavItem',
            name: 'Destek Talepleri',
            to: '/destek-talepleri/',
            icon: 'cib-hackhands'
        }, */
        {
            _name: 'CSidebarNavItem',
            name: 'Ayarlar',
            to: '/ayarlar/',
            icon: 'cil-cog'
        },
        // YÖNETİM - END


        // TANIMLAMALAR - START
        /* {
            _name: 'CSidebarNavTitle',
            _children: ['Definitions']
        },
        {
            _name: 'CSidebarNavDropdown',
            name: 'Service Management',
            route: '/service-management/',
            icon: 'cib-hackerrank',
            items: [
                {
                    name: 'Categories',
                    to: '/service-management/categories',
                    icon: 'cil-library'
                },
                {
                    name: 'Products',
                    to: '/service-management/products',
                    icon: 'cil-spreadsheet'
                }
            ]
        }, */
        // TANIMLAMALAR - END
        
        /*
        {
            _name: 'CSidebarNavItem',
            name: 'Settings',
            to: '/settings/',
            icon: 'cil-cog'
        }, */
        {
            _name: 'CSidebarNavDivider',
            _class: 'm-2'
        }
    ]
}]
