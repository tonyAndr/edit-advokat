const { RichText } = wp.blockEditor;
const { apiFetch } = wp;
 
const CategoryAutocomplete = (props) => {
    const autocompleters = [
        {
            name: 'category',
            // The prefix that triggers this completer
            triggerPrefix: '',
            // The option data
            options( search ) {
                let payload = '';
                if ( search ) {
                    payload = '?search=' + encodeURIComponent( search );
                }
                return apiFetch( { path: '/wp/v2/categories' + payload } );
            },
            isDebounced: true,
            // Returns a label for an option like "🍊 Orange"
            getOptionLabel: option => (
                <span>
                    {option.id} | {option.slug} | { option.name }
                </span>
            ),
            // Declares that options should be matched by their name
            getOptionKeywords: option => [ option.name ],
            // Declares completions should be inserted as abbreviations
            getOptionCompletion( cat ) {
                return `${ cat.id }`;
            },
        }
    ];

 
    return (
        <div>
            <RichText
                tagName="p"
                value={props.state_value}
                onChange={props.changeCategory}
                aria-autocomplete="list"
                autocompleters={autocompleters}
            />
                        
            <p>Начни вводить имя города</p>
        </div>
    );
};

export default CategoryAutocomplete;