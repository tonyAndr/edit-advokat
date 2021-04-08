/* eslint-disable camelcase */

/**
* WordPress dependencies
*/
const { __ } = wp.i18n;

const {
    Button,
    PanelBody,
    PanelRow,
    TextControl,
    TextareaControl,
} = wp.components;

const {
    render,
    Component,
    Fragment
} = wp.element;

/**
* Internal dependencies
*/

import CategoryAutocomplete from './CategoryCompleter';

import './style.css';

class App extends Component {
    constructor() {
        super(...arguments);
        
        this.changeOptions = this.changeOptions.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.updateTags = this.updateTags.bind(this);
        this.updateMetaAIOTitle = this.updateMetaAIOTitle.bind(this);
        this.updateMetaAIODesc = this.updateMetaAIODesc.bind(this);
        this.updateMetaUrAddress = this.updateMetaUrAddress.bind(this);
        this.updateMetaUrFIO = this.updateMetaUrFIO.bind(this);
        this.updateMetaUrRegNum = this.updateMetaUrRegNum.bind(this);
        this.updateMetaUrStatus = this.updateMetaUrStatus.bind(this);
        this.updateMetaUrUslugi = this.updateMetaUrUslugi.bind(this);
        this.updateMetaIIAbout = this.updateMetaIIAbout.bind(this);
        this.updateMetaIICoord = this.updateMetaIICoord.bind(this);
        this.updateMetaIICity = this.updateMetaIICity.bind(this);
        this.updateMetaIIArea = this.updateMetaIIArea.bind(this);
        this.updateMetaIIAddress = this.updateMetaIIAddress.bind(this);
        this.updateMetaIIDistrict = this.updateMetaIIDistrict.bind(this);
        this.updateMetaIIMetro = this.updateMetaIIMetro.bind(this);
        this.updateMetaIIOffice = this.updateMetaIIOffice.bind(this);
        this.updateMetaIIPhones = this.updateMetaIIPhones.bind(this);
        this.updateMetaIIWebsite = this.updateMetaIIWebsite.bind(this);
        this.updateMetaIIWebcontacts = this.updateMetaIIWebcontacts.bind(this);
        this.updateMetaIIPrices = this.updateMetaIIPrices.bind(this);
        this.updateMetaIIReestr = this.updateMetaIIReestr.bind(this);
        this.updateMetaIIWorkhours = this.updateMetaIIWorkhours.bind(this);
        
        this.state = {
            isAPISaving: false,
            category: '',
            postItem: {},
            createNew: false,
            _categories: [],
            _content: '',
            _title: '',
            _status: '',
            _tags: [],
            _meta_aio_title: '',
            _meta_aio_desc: '',
            _meta_ur_address: '',
            _meta_ur_fio: '',
            _meta_ur_regnum: '',
            _meta_ur_status: '',
            _meta_ur_uslugi: [],
            _meta_ii_about: '',
            _meta_ii_coord: '',
            _meta_ii_city: '',
            _meta_ii_area: '',
            _meta_ii_address: '',
            _meta_ii_district: '',
            _meta_ii_metro: '',
            _meta_ii_office: '',
            _meta_ii_phones: '',
            _meta_ii_website: '',
            _meta_ii_webcontacts: '',
            _meta_ii_prices: [],
            _meta_ii_reestrminust: '',
            _meta_ii_workhours: [],
        };
    }
    
    componentDidMount() {
        wp.api.loadPromise.then(() => {
            const params = new URLSearchParams(location.search);
            const postId = params.get("advid");
            
            // this.settings = new wp.api.models.Settings();
            
            if (postId) {
                this.post = new wp.api.models.Post({id: postId});
                this.post.fetch().then(response => {
                    console.log(response)
                    this.setState({
                        postItem: response,
                        createNew: false,
                        _categories: response.categories || [],
                        _content: response.content.rendered || '',
                        _title: response.title.rendered || '',
                        _status: response.status || '',
                        _tags: response.tags || [],
                        _meta_aio_title: response.meta._aioseop_title || '',
                        _meta_aio_desc: response.meta._aioseop_description || '',
                        _meta_ur_address: response.meta.ur_address || '',
                        _meta_ur_fio: response.meta.ur_fio || '',
                        _meta_ur_regnum: response.meta.ur_regNum || '',
                        _meta_ur_status: response.meta.ur_status || '',
                        _meta_ur_uslugi: response.meta.ur_uslugi.length > 0 ? response.meta.ur_uslugi.join("\n") : [],
                        _meta_ii_about: response.meta._item_info.aboutCompany || '',
                        _meta_ii_coord: response.meta._item_info.geo.coords || '',
                        _meta_ii_city: response.meta._item_info.geo.city || '',
                        _meta_ii_area: response.meta._item_info.geo.area || '',
                        _meta_ii_address: response.meta._item_info.geo.address || '',
                        _meta_ii_district: response.meta._item_info.geo.district || '',
                        _meta_ii_metro: response.meta._item_info.geo.metro || '',
                        _meta_ii_office: response.meta._item_info.geo.office || '',
                        _meta_ii_phones: response.meta._item_info.phones || '',
                        _meta_ii_website: response.meta._item_info.website || '',
                        _meta_ii_webcontacts: response.meta._item_info.webContacts || '',
                        _meta_ii_prices: response.meta._item_info.prices.length > 0 ? response.meta._item_info.prices.join("\n") : [],
                        _meta_ii_reestrminust: response.meta._item_info.reestrMinust || '',
                        _meta_ii_workhours: response.meta._item_info.workHours.length > 0 ? response.meta._item_info.workHours.join("\n") : [],
                    });
                });
            } else {
                this.setState({
                    createNew: true
                });
            }
        });
    }
    
    changeOptions() {
        this.setState({ isAPISaving: true });
        
        const post = new wp.api.models.Post();
        const updatedItem = {
            ...(!this.state.createNew && this.state.postItem),
            categories: this.state._categories,
            content: this.state._content,
            title: this.state._title,
            status: this.state._status,
            tags: this.state._tags,
            meta: {
                ...(!this.state.createNew && this.state.postItem.meta),
                _aioseop_title: this.state._meta_aio_title,
                _aioseop_description: this.state._meta_aio_desc,
                ur_address: this.state._meta_ur_address,
                ur_fio: this.state._meta_ur_fio,
                ur_regNum: this.state._meta_ur_regnum,
                ur_status: this.state._meta_ur_status,
                ur_uslugi: this.state._meta_ur_uslugi.length > 0 ? this.state._meta_ur_uslugi.split("\n") : [],
                _item_info: {
                    ...(!this.state.createNew && this.state.postItem.meta._item_info),
                    geo: {
                        ...(!this.state.createNew && this.state.postItem.meta._item_info.geo), 
                        city: this.state._meta_ii_city,
                        area: this.state._meta_ii_area,
                        district: this.state._meta_ii_district,
                        metro: this.state._meta_ii_metro,
                        office: this.state._meta_ii_office,
                        address: this.state._meta_ii_address,
                        coords: this.state._meta_ii_coord,
                    },
                    phones: this.state._meta_ii_phones,
                    website: this.state._meta_ii_website,
                    webContacts: this.state._meta_ii_webcontacts,
                    prices: this.state._meta_ii_prices.length > 0 ? this.state._meta_ii_prices.split("\n") : [],
                    reestrMinust: this.state._meta_ii_reestrminust,
                    workHours: this.state._meta_ii_workhours.length > 0 ? this.state._meta_ii_workhours.split("\n") : [],
                }
            }
        }
        
        post.save(updatedItem).then(response => {
            console.log(`Updated post`);
            console.log(response);
            this.setState({
                isAPISaving: false
            });
        });
    }
    
    updateCategory(value) {
        this.setState({
            _categories: value,
        })
    }
    
    updateTitle(value) {
        this.setState({
            _title: value,
        })
    }

    updateContent(value) {
        this.setState({
            _content: value,
        })
    }
    
    updateStatus(value) {
        this.setState({
            _status: value,
        })
    }
    
    updateTags(value) {
        this.setState({
            _tags: value,
        })
    }
    
    updateMetaAIOTitle(value) {
        this.setState({
            _meta_aio_title: value,
        })
    }
    updateMetaAIODesc(value) {
        this.setState({
            _meta_aio_desc: value,
        })
    }
    updateMetaUrAddress(value) {
        this.setState({
            _meta_ur_address: value,
        })
    }
    updateMetaUrFIO(value) {
        this.setState({
            _meta_ur_fio: value,
        })
    }
    updateMetaUrRegNum(value) {
        this.setState({
            _meta_ur_regnum: value,
        })
    }
    updateMetaUrStatus(value) {
        this.setState({
            _meta_ur_status: value,
        })
    }
    updateMetaUrUslugi(value) {
        this.setState({
            _meta_ur_uslugi: value,
        })
    }
    updateMetaIIAbout(value) {
        this.setState({
            _meta_ii_about: value,
        })
    }
    updateMetaIICoord(value) {
        this.setState({
            _meta_ii_coord: value,
        })
    }
    updateMetaIICity(value) {
        this.setState({
            _meta_ii_coord: value,
        })
    }
    updateMetaIIArea(value) {
        this.setState({
            _meta_ii_area: value,
        })
    }
    updateMetaIIAddress(value) {
        this.setState({
            _meta_ii_address: value,
        })
    }
    updateMetaIIDistrict(value) {
        this.setState({
            _meta_ii_district: value,
        })
    }
    updateMetaIIMetro(value) {
        this.setState({
            _meta_ii_metro: value,
        })
    }
    updateMetaIIOffice(value) {
        this.setState({
            _meta_ii_office: value,
        })
    }
    updateMetaIIPhones(value) {
        this.setState({
            _meta_ii_phones: value,
        })
    }
    updateMetaIIWebsite(value) {
        this.setState({
            _meta_ii_website: value,
        })
    }
    updateMetaIIWebsite(value) {
        this.setState({
            _meta_ii_website: value,
        })
    }
    updateMetaIIWebcontacts(value) {
        this.setState({
            _meta_ii_webcontacts: value,
        })
    }
    updateMetaIIPrices(value) {
        this.setState({
            _meta_ii_prices: value,
        })
    }
    updateMetaIIReestr(value) {
        this.setState({
            _meta_ii_reestrminust: value,
        })
    }
    updateMetaIIWorkhours(value) {
        this.setState({
            _meta_ii_workhours: value,
        })
    }
    render() {
        
        return (
            <Fragment>
                
                <h1>{__('Редактор адвокатов')}</h1>
                
                <PanelBody  >
                    <h2>Основная инфа</h2>
                    <PanelRow>
                        <p>Категория (город - айди)</p>
                        <CategoryAutocomplete state_value={this.state._categories} changeCategory={this.updateCategory}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Title H1: </p>
                        <TextControl value={this.state._title} onChange={this.updateTitle}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Content: </p>
                        <TextControl value={this.state._content} onChange={this.updateContent}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Status: </p>
                        <TextControl value={this.state._status} onChange={this.updateStatus}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Tags: </p>
                        <TextControl value={this.state._tags} onChange={this.updateTags}/>
                    </PanelRow>
                    <PanelRow>
                        <p>AIO Title: </p>
                        <TextControl value={this.state._meta_aio_title} onChange={this.updateMetaAIOTitle}/>
                    </PanelRow>
                    <PanelRow>
                        <p>AIO Description: </p>
                        <TextControl value={this.state._meta_aio_desc} onChange={this.updateMetaAIODesc}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Address: </p>
                        <TextControl value={this.state._meta_ur_address} onChange={this.updateMetaUrAddress}/>
                    </PanelRow>
                    <PanelRow>
                        <p>FIO: </p>
                        <TextControl value={this.state._meta_ur_fio} onChange={this.updateMetaUrFIO}/>
                    </PanelRow>
                    <PanelRow>
                        <p>RegNum: </p>
                        <TextControl value={this.state._meta_ur_regnum} onChange={this.updateMetaUrRegNum}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Adv. Status: </p>
                        <TextControl value={this.state._meta_ur_status} onChange={this.updateMetaUrStatus}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Uslugi: </p>
                        <TextareaControl value={this.state._meta_ur_uslugi} onChange={this.updateMetaUrUslugi}/>
                    </PanelRow>
                
                </PanelBody>

                <PanelBody>
                    <h2>Из item_info</h2>
                    <h3>GEO</h3>
                    <PanelRow>
                        <p>Coords: </p>
                        <TextControl value={this.state._meta_ii_coord} onChange={this.updateMetaIICoord}/>
                    </PanelRow>
                    <PanelRow>
                        <p>City: </p>
                        <TextControl value={this.state._meta_ii_city} onChange={this.updateMetaIICity}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Area: </p>
                        <TextControl value={this.state._meta_ii_area} onChange={this.updateMetaIIArea}/>
                    </PanelRow>
                    <PanelRow>
                        <p>District: </p>
                        <TextControl value={this.state._meta_ii_district} onChange={this.updateMetaIIDistrict}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Metro: </p>
                        <TextControl value={this.state._meta_ii_metro} onChange={this.updateMetaIIMetro}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Office: </p>
                        <TextControl value={this.state._meta_ii_office} onChange={this.updateMetaIIOffice}/>
                    </PanelRow>
                    <h3>Contacts</h3>
                    <PanelRow>
                        <p>Phones: </p>
                        <TextControl value={this.state._meta_ii_phones} onChange={this.updateMetaIIPhones}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Website: </p>
                        <TextControl value={this.state._meta_ii_website} onChange={this.updateMetaIIWebsite}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Webcontacts: </p>
                        <TextControl value={this.state._meta_ii_webcontacts} onChange={this.updateMetaIIWebcontacts}/>
                    </PanelRow>
                    <h3>Other</h3>
                    <PanelRow>
                        <p>ReestrMinust: </p>
                        <TextControl value={this.state._meta_ii_reestrminust} onChange={this.updateMetaIIReestr}/>
                    </PanelRow>
                    <PanelRow>
                        <p>Prices: </p>
                        <TextareaControl value={this.state._meta_ii_prices} onChange={this.updateMetaIIPrices}/>
                    </PanelRow>
                    <PanelRow>
                        <p>WorkHours: </p>
                        <TextareaControl value={this.state._meta_ii_workhours} onChange={this.updateMetaIIWorkhours}/>
                    </PanelRow>
                </PanelBody>

                <PanelBody>
                    <PanelRow>
                        <div className="codeinwp-text-field-button-group">
                            <Button
                                isPrimary
                                isLarge
                                disabled={this.state.isAPISaving}
                                onClick={() => this.changeOptions()}
                                >
                                {__('Save')}
                            </Button>
                        </div>
                    </PanelRow>
                </PanelBody>
            
            </Fragment>
            );
        }
    }
    
    render(
        <App />,
        document.getElementById('edit-advokat-container')
        );
        