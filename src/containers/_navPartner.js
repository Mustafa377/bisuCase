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
            name: 'Sigortalılar',
            to: '/sigortalilar/',
            icon: 'cil-user-follow'
        },
        {
            _name: 'CSidebarNavDivider',
            _class: 'm-2'
        }
        // YÖNETİM - END
    ]
}]