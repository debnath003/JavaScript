import { CircularDoublyLinkedList } from '../CircularDoublyLinkedList' // Adjust the import path as needed

describe('CircularDoublyLinkedList', () => {
  /**
   * Creates a new CircularDoublyLinkedList and appends elements to it.
   * @param {Array} elements - The elements to append.
   * @returns {CircularDoublyLinkedList} - The created list.
   */
  function createAndAppend(elements) {
    const list = new CircularDoublyLinkedList()
    elements.forEach((element) => list.append(element))
    return list
  }

  it('Check append', () => {
    const list = createAndAppend([1])

    expect(list.toArray()).toEqual([1])

    list.append(2)
    expect(list.toArray()).toEqual([1, 2])
  })

  it('Check insert', () => {
    const list = createAndAppend([1])

    list.insert(0, 20)
    expect(list.toArray()).toEqual([20, 1])

    list.insert(1, 30)
    expect(list.toArray()).toEqual([20, 30, 1])
  })

  it('Check removeAt', () => {
    const list = createAndAppend([10, 40, 30])

    list.removeAt(0)
    expect(list.toArray()).toEqual([40, 30])

    list.removeAt(1)
    expect(list.toArray()).toEqual([40])
  })

  it('Check toArray', () => {
    const list = createAndAppend([20])
    
    expect(list.toArray()).toEqual([20])
  })

  it('Check createIterator', () => {
    const list = createAndAppend([10, 20, 30])
    const iterator = list.createIterator()
    
    const elements = [];
    for (let element of iterator) {
      elements.push(element)
    }
    
    expect(elements).toEqual([10, 20, 30])
  })

  it('Check isEmpty', () => {
    const emptyList = new CircularDoublyLinkedList()
    expect(emptyList.isEmpty()).toEqual(true)

    const nonEmptyList = createAndAppend(['Hello'])
    expect(nonEmptyList.isEmpty()).toEqual(false)
  })
})